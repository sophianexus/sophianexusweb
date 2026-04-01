// Developer: Matija (https://www.github.com/n11kol11c)

import express from 'express';
import cors from 'cors';
import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import createHTMLForwardEmail from './assets/email_content.js';
import helmet from 'helmet';
import hpp from 'hpp';

dotenv.config();

const app = express();

app.set(helmet())
app.set('trust proxy', 1);
app.use(express.json());
app.use(hpp())

const NETLIFYLINK = process.env.SITE_LINK;
const TESTURL = process.env.TEST_LINK;

const allowedOrigins = [
  "https://sophianexus.me",
  `${NETLIFYLINK}`,
  `${TESTURL}`
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('CORS policy: Access denied.'));
    }
  },
  methods: ["POST"],
  credentials: true
}));

const prijavaLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 2,
  standardHeaders: true,
  legacyHeaders: false,
  skipFailedRequests: true,
  message: { 
    success: false, 
    errors: ["Previše pokušaja. Molimo sačekajte minut prije nove prijave."] 
  }
});

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const validateInput = (name, email, number) => {
  const errors = [];
  
  if (!name || name.trim().length < 3) {
    errors.push("Ime mora imati bar 3 karaktera.");
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.push("Unesite ispravnu email adresu.");
  }
  
  const phoneRegex = /^[0-9+\s-]+$/;
  if (!number || !phoneRegex.test(number.trim())) {
    errors.push("Broj telefona može sadržati samo cifre.");
  } else if (number.trim().length < 6) {
    errors.push("Unesite ispravan broj telefona (bar 6 cifara).");
  }

  return errors;
};

app.post('/api/prijava', prijavaLimiter, async (req, res) => {
  try {
    const { name, email, number } = req.body;

    const validationErrors = validateInput(name, email, number);
    
    if (validationErrors.length > 0) {
      return res.status(400).json({ 
        success: false, 
        message: "Validacija neuspješna", 
        errors: validationErrors 
      });
    }

    const htmlMessage = createHTMLForwardEmail(name, number, email);

    const msg = {
      to: process.env.ADMINISTRATOR_EMAIL_ADDRESS,
      from: process.env.SENDGRID_EMAIL,
      subject: `Nova Prijava: ${name}`,
      html: htmlMessage,
      replyTo: email 
    };

    await sgMail.send(msg);
    
    console.log(`[SUCCESS] Prijava poslata za: ${email}`);
    
    return res.status(200).json({ 
      success: true, 
      message: "Prijava uspješno primljena! Javićemo se ubrzo." 
    });

  } catch (error) {
    console.error("[ERROR] SendGrid Error:", error);
    
    if (error.response) {
      console.error(error.response.body);
    }

    return res.status(500).json({ 
      success: false, 
      message: "Došlo je do greške na serveru. Molimo pokušajte kasnije." 
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`-----------------------------------------`);
  console.log(`✅ Sophia Nexus Server pokrenut na portu ${PORT}`);
  console.log(`📧 Slanje mejlova preko: ${process.env.SENDGRID_EMAIL}`);
  console.log(`🛡️ Rate Limiter aktiviran (2/min po IP adresi)`);
  console.log(`-----------------------------------------`);
});
