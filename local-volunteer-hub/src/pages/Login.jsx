import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaGoogle, FaFacebookF } from 'react-icons/fa';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login successful! (No backend yet)");
    navigate('/dashboard'); // redirect after login
  };

  const handleGoogleLogin = () => {
    alert("Google login clicked (no backend connected)");
  };

  const handleFacebookLogin = () => {
    alert("Facebook login clicked (no backend connected)");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">Welcome Back!</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <FaEnvelope />
            <input type="email" placeholder="Email" required />
          </div>

          <div className="input-group">
            <FaLock />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              required
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
            </span>
          </div>

          <div className="forgot-password">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>

          <button type="submit" className="login-btn">Login</button>

          <div className="social-separator">or login with</div>

          <div className="social-buttons">
            <button className="google-btn" onClick={handleGoogleLogin}>
              <FaGoogle /> Google
            </button>
            <button className="facebook-btn" onClick={handleFacebookLogin}>
              <FaFacebookF /> Facebook
            </button>
          </div>
        </form>

        <p className="register-link">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
