import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const res = await axios.get('http://localhost:5050/api/auth/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(res.data);
      } catch (err) {
        console.error("Error fetching profile:", err);
        if (err.response && err.response.status === 401) {
          navigate('/login');
        } else {
          alert("Failed to load profile.");
        }
      }
    };

    fetchProfile();
  }, [navigate]);

  if (!user) {
    return <div className="profile-container">Loading profile...</div>;
  }

  return (
    <div className="profile-container">
      <h2>Welcome, {user.name} 🌼</h2>
        

        {/* <div className="profile-actions">
          <Link to="/dashboard" className="profile-btn">Go to Dashboard</Link>
          <Link to="/certificates" className="profile-btn">View Certificates</Link>
        </div> */}
       <div className="dashboard">
       <div className="profile-card">
          <h3>Your Details</h3>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone || 'N/A'}</p>
          <p><strong>Role:</strong> {user.role}</p>
          {user.role === 'organizer' && (
            <p><strong>Organization:</strong> {user.orgName || 'N/A'}</p>
          )}
        </div>
      <div className="dashboard-header">
        <h1>Your Volunteering Impact at a Glance</h1>
        <p>Your central hub for all volunteering activities</p>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Total Hours Volunteered</h3>
          <span>124</span>
        </div>
        <div className="stat-card">
          <h3>Events Attended</h3>
          <span>9</span>
        </div>
        <div className="stat-card">
          <h3>Certificates Earned</h3>
          <span>4</span>
        </div>
      </div>
      </div>
      </div>
  );
};

export default Profile;
