import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Cookies from 'js-cookie'; // in case you're storing tokens in cookies
import axios from 'axios'; // in case you use global axios headers
import './Logout.css';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear client-side auth data
    localStorage.removeItem("token");
    localStorage.removeItem('user');
    sessionStorage.clear();
    Cookies.remove('token');
    Cookies.remove('user');

    // Clear global axios Authorization header (if used)
    delete axios.defaults.headers.common['Authorization'];

    // Optionally, notify backend (if there's a logout API route)
    // axios.post('/api/auth/logout').catch(() => {});

    // Redirect to login after 3 seconds
    const timer = setTimeout(() => {
      navigate('/login');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="logout-container">
      <div className="logout-card">
        <h1>Logged Out Successfully</h1>
        <p>Thank you for being a part of <strong>KindConnect</strong>.</p>
        <div className="spinner"></div>
        <p className="redirect-msg">Redirecting to login...</p>
        <Link to="/" className="home-link">← Back to Home</Link>
      </div>
    </div>
  );
};

export default Logout;
