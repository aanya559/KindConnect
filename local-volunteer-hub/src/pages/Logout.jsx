import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Logout.css';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear session or auth data
    localStorage.clear();

    // Redirect after 3 seconds
    const timer = setTimeout(() => {
      navigate('/login');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="logout-container">
      <div className="logout-card">
        <h1> Logged Out Successfully</h1>
        <p>Thank you for being a part of <strong>KindConnect</strong>.</p>
        <div className="spinner"></div>
        <p className="redirect-msg">Redirecting to login...</p>
        <Link to="/" className="home-link">← Back to Home</Link>
      </div>
    </div>
  );
};

export default Logout;
