import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaGoogle, FaFacebookF } from 'react-icons/fa';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import API from '../api/api';
// import { useLocation } from 'react-router-dom';

// const location = useLocation();
// const redirectPath = new URLSearchParams(location.search).get('redirect') || '/dashboard';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/login', formData);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // navigate(redirectPath);
      navigate('/');
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  const handleGoogleLogin = () => {
    alert("Google login clicked (not implemented)");
  };

  const handleFacebookLogin = () => {
    alert("Facebook login clicked (not implemented)");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">Welcome Back!</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <FaEnvelope />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <FaLock />
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
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
            <button type="button" className="google-btn" onClick={handleGoogleLogin}>
              <FaGoogle /> Google
            </button>
            <button type="button" className="facebook-btn" onClick={handleFacebookLogin}>
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
