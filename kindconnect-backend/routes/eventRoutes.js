const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// @route POST /api/events
// @desc Create a new event
router.post('/', async (req, res) => {
  try {
    const newEvent = new Event(req.body);
    await newEvent.save();
    res.status(201).json({ message: 'Event created successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Server error while creating event', error });
  }
});

// @route GET /api/events
// @desc Fetch all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find().sort({ createdAt: -1 });
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch events', error });
  }
});

module.exports = router;
