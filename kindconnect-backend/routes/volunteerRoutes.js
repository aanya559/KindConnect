// routes/volunteerRoutes.js
import express from 'express';
import Volunteer from '../models/Volunteer.js';
import { sendConfirmationEmail } from '../utils/mailer.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, phone, interest, message } = req.body;

    const newVolunteer = new Volunteer({
      name,
      email,
      phone,
      interest,
      message,
    });

    await newVolunteer.save();

    // Send confirmation email
    await sendConfirmationEmail(email, name, interest);

    res.status(201).json({ message: 'Volunteer registered and email sent successfully' });
  } catch (err) {
    console.error('Error saving volunteer or sending email:', err);
    res.status(500).json({ message: 'Server Error' });
  }
});

export default router;
