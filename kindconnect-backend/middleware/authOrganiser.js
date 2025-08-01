const jwt = require('jsonwebtoken');


const authenticateOrganiser = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; // Bearer <token>
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // decoded contains { id: user._id }
    if (req.user.role !== 'organizer') {
      return res.status(403).json({ message: 'Access denied. Organiser role required.' });
    }
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid or expired token.' });
  }
}


module.exports = authenticateOrganiser;