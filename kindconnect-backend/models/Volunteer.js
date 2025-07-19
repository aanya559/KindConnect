import mongoose from 'mongoose';

const volunteerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  interest: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Volunteer', volunteerSchema);
