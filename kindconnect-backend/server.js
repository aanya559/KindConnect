
import React, { useState } from 'react';
import './Volunteers.css';
import axios from 'axios'; // Make sure axios is installed

const Volunteers = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/volunteers', formData);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setFormData({ name: '', email: '', phone: '', interest: '', message: '' });
    } catch (error) {
      console.error('Error submitting volunteer form:', error);
    }
  };

  return (
    <div className="volunteer-form-section">
      {/* ...header & volunteer cards stay the same... */}

      {submitted && (
        <div className="success-msg">
          🎉 Thank you! We'll get in touch soon. 💌
        </div>
      )}

      <form className="volunteer-form" onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required />
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" />
        <select name="interest" value={formData.interest} onChange={handleChange} required>
          <option value="">Area of Interest</option>
          <option value="Environment">Environment</option>
          <option value="Education">Education</option>
          <option value="Food">Food & Charity</option>
        </select>
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us why you want to volunteer..." rows="4" required />
        <button type="submit">Apply Now</button>
      </form>
    </div>
  );
};

export default Volunteers;
