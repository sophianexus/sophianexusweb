const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();
const email_content = require('assets/email_content')

const app = express();

app.use(cors({
    origin: ["https://your-custom-domain.com", "http://localhost:5173"], 
    methods: ["POST"],
    credentials: true
}));

app.use(express.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NODE_EMAIL_ADMIN,
        pass: process.env.NODE_EMAIL_ADMIN_PASSWORD
    }
});

app.post('/api/contact', (req, res) => {
    const { name, number, email } = req.body;

    const mailOptions = {
        from: email,
        to: process.env.TEST_ADMIN_TO_MAIL,
        subject: `New Lead: ${name}`,
        html: email_content.htmlContentTestVersion
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Email Error:", error);
            return res.status(500).json({ success: false, message: "Error sending email" });
        }
        console.log("Email sent: " + info.response);
        res.status(200).json({ success: true, message: "Email sent successfully!" });
    });
});

const PORT = process.env.PORT || 10000; 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// fetch('http://localhost:10000/api/contact', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     name: "Test User",
//     number: "123456789",
//     email: "tester@example.com"
//   })
// })
// .then(res => res.json())
// .then(data => console.log("Server Response:", data))
// .catch(err => console.error("Error:", err));