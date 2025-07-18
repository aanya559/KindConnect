const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    match: [/^\d{10}$/, 'Phone number must be 10 digits']
  },
  role: {
    type: String,
    enum: ["volunteer", "organizer"],
    required: true
  },
  orgName: {
    type: String,
    default: ''
  }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
