const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const eventRoutes = require('./routes/eventRoutes');
const authRoutes = require('./routes/authRoutes');
const contactRoutes = require('./routes/contactRoutes');
const volunteerRoutes = require('./routes/volunteerRoutes'); // fix filename if needed

dotenv.config();
const app = express();

// app.use(cors());
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173', // ✅ Frontend origin
  credentials: true               // ✅ Allow cookies
}));

// Routes
app.use('/api/events', eventRoutes);
app.use('/api/auth', authRoutes);         // for /auth/register and /login
app.use('/api/contact', contactRoutes);   // for contact form
app.use('/api/volunteer', volunteerRoutes); // for volunteer form

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
