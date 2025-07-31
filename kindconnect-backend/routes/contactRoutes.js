const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  // Create transporter using Gmail (or any SMTP)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "aanyashukla559@gmail.com",       // Your email (e.g., aanyanotifier@gmail.com)
      pass: "fpyg jiqz tnoj hkyv"        // Your app password (not your real password)
    }
  });

  // Email options
  const mailOptions = {
    from: email,
    to: 'kindconnect19@gmail.com',               // The recipient
    subject: `New Contact Message from ${name}`,
    text: `
      You have received a new message from your website:

      Name: ${name}
      Email: ${email}
      Message: ${message}
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ msg: '📬 Message emailed successfully!' });
  } catch (err) {
    console.error('❌ Error sending email:', err.message);
    res.status(500).json({ msg: '❌ Failed to send email.' });
  }
});

module.exports = router;
