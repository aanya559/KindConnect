import React, { useState } from 'react';
import API from "../api/api";
import './Register.css';
import { Link } from 'react-router-dom';
import { FaUser, FaEnvelope, FaPhone, FaLock, FaBuilding } from 'react-icons/fa';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    orgName: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required.';
    if (!formData.email.includes('@')) newErrors.email = 'Invalid email.';
    if (!formData.phone.match(/^\d{10}$/)) newErrors.phone = 'Phone must be 10 digits.';
    if (!formData.role) newErrors.role = 'Role is required.';
    if (formData.role === 'organizer' && !formData.orgName.trim())
      newErrors.orgName = 'Organization name is required.';
    if (formData.password.length < 6) newErrors.password = 'Password too short.';
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match.';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const { name, email, phone, role, orgName, password } = formData;
        const res = await API.post("/auth/register", {
          name,
          email,
          phone,
          role,
          orgName: role === "organizer" ? orgName : "",
          password
        });
        alert("🎉 Registered Successfully!");
        console.log("Response:", res.data);
        setFormData({
          name: '',
          email: '',
          phone: '',
          role: '',
          orgName: '',
          password: '',
          confirmPassword: '',
        });
      } catch (err) {
        console.error("Registration error:", err.response?.data || err.message);
        alert(err.response?.data?.message || "Registration failed");
      }
    }
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <h2 className="register-title">Create Your Account</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <FaUser />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          {errors.name && <p className="error">{errors.name}</p>}

          <div className="input-group">
            <FaEnvelope />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          {errors.email && <p className="error">{errors.email}</p>}

          <div className="input-group">
            <FaPhone />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          {errors.phone && <p className="error">{errors.phone}</p>}

          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="">Select Role</option>
            <option value="volunteer">Volunteer</option>
            <option value="organizer">Organizer</option>
          </select>
          {errors.role && <p className="error">{errors.role}</p>}

          {formData.role === 'organizer' && (
            <>
              <div className="input-group">
                <FaBuilding />
                <input
                  type="text"
                  name="orgName"
                  placeholder="Organization Name"
                  value={formData.orgName}
                  onChange={handleChange}
                />
              </div>
              {errors.orgName && <p className="error">{errors.orgName}</p>}
            </>
          )}

          <div className="input-group">
            <FaLock />
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
            </span>
          </div>
          {errors.password && <p className="error">{errors.password}</p>}

          <div className="input-group">
            <FaLock />
            <input
              type={showPassword ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
            </span>
          </div>
          {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

          <button type="submit" className="register-btn">Register</button>
        </form>

        <p className="login-link">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
