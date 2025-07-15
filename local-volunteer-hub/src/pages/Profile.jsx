import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const user = {
    name: 'Aanya Shukla',
    email: 'aanya@example.com',
    phone: '9876543210',
    role: 'Volunteer',
    org: 'KindConnect Org',
  };

  return (
    <div className="profile-container">
      <h2>Welcome, {user.name} 🌼</h2>

      <div className="profile-section">
        <div className="profile-card">
          <h3>Your Details</h3>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Role:</strong> {user.role}</p>
          <p><strong>Organization:</strong> {user.org}</p>
        </div>

        <div className="profile-actions">
          <Link to="/dashboard" className="profile-btn">Go to Dashboard</Link>
          <Link to="/certificates" className="profile-btn">View Certificates</Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
