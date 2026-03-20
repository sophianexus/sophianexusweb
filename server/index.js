import express from 'express';
import cors from 'cors';
import sgMail from '@sendgrid/mail';
import htmlContentTestVersion from './assets/email_content.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

const FRONTEND_URL = "https://sophianexusweb.netlify.app";

app.use(cors({
  origin: ["https://sophianexusweb.netlify.app", "http://localhost:5173"],
  methods: ["POST"],
  credentials: true
}));

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post('/api/contact', async (req, res) => {
  try {
    const { name, number, email } = req.body;

    const htmlMessage = htmlContentTestVersion(name, number, email);

    const msg = {
      to: process.env.TEST_ADMIN_TO_MAIL,
      from: process.env.SENDGRID_EMAIL,
      subject: `New Lead: ${name}`,
      html: htmlMessage
    };

    await sgMail.send(msg);
    console.log("Email sent successfully!");
    res.status(200).json({ success: true, message: "Email sent!" });

  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({ success: false, message: "Error sending email" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
