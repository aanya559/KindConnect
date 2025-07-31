const express = require("express");
const router = express.Router();
const Volunteer = require("../models/Volunteer");

router.post("/add", async (req, res) => {
  const { name, email, phone, interest, reason } = req.body;

  try {
    const newVolunteer = new Volunteer({ name, email, phone, interest, reason });
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

module.exports = router;
