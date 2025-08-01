const express = require('express');
const router = express.Router();
const Event = require('../models/Event');
const authenticateOrganiser = require('../middleware/authOrganiser'); // new middleware
const authenticate = require('../middleware/auth'); // Assuming you have a general auth middleware

// @route POST /api/events
// @desc Create a new event
router.post('/create', async (req, res) => {
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
router.get('/getall', async (req, res) => {
  try {
    const events = await Event.find().sort({ createdAt: -1 });
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch events', error });
  }
});

// User joins an event
router.post('/join/:id', authenticate, async (req, res) => {
  const eventId = req.params.id;
  try {
    const event = await Event.findById(eventId);
    if (!event) return res.status(404).json({ message: 'Event not found' });

    // You can add more logic like checking if user already joined, etc.

    res.status(200).json({ message: 'Joined event successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error joining event', error });
  }
});

module.exports = router;
