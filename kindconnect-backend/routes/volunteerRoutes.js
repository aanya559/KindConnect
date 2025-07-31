// routes/volunteerRoutes.js
import express from 'express';
import Volunteer from '../models/Volunteer.js';
import { sendConfirmationEmail } from '../utils/mailer.js';

const router = express.Router();

router.post("/add", async (req, res) => {
  const { name, email, phone, interest, reason } = req.body;

    const newVolunteer = new Volunteer({
      name,
      email,
      phone,
      interest,
      message,
    });

    await newVolunteer.save();
    res.status(200).json({ msg: "Volunteer application received!" });
  } catch (err) {
    console.error("Error saving volunteer:", err.message);
    res.status(500).json({ msg: "Failed to save application." });
  }
});

router.get("/recent", async (req, res) => {
  try {
    const topVolunteers = await Volunteer.find()
      .sort({ submittedAt: -1 })  // Most recent first
      .limit(3);

    res.status(200).json(topVolunteers);
  } catch (err) {
    console.error("Error fetching top volunteers:", err.message);
    res.status(500).json({ msg: "Failed to fetch top volunteers." });
  }
});

export default router;
