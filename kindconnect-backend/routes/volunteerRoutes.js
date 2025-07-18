const express = require("express");
const router = express.Router();
const Volunteer = require("../models/Volunteer");

router.post("/", async (req, res) => {
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

module.exports = router;
