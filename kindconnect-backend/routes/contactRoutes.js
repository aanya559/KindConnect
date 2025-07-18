const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newMsg = new Contact({ name, email, message });
    await newMsg.save();
    res.status(200).json({ msg: 'Message saved!' });
  } catch (err) {
    res.status(500).json({ msg: 'Error saving message.' });
  }
});

module.exports = router;
