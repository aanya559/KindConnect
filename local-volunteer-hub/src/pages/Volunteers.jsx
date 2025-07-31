import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Volunteers.css';

const Volunteers = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    reason: '',
  });

  useEffect(() => {
    const fetchVolunteers = async () => {
      try {
        const res = await axios.get('http://localhost:5050/api/volunteer/recent');
        setVolunteers(res.data || []);
      } catch (err) {
        console.error('Failed to fetch volunteers:', err);
      }
    };

    fetchVolunteers();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5050/api/volunteer/add', formData, {
        headers: { 'Content-Type': 'application/json' },
      });
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: '',
        reason: '',
      });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      console.error('Error submitting form:', err);
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <div className="volunteer-page">
      <div className="volunteer-header">
        <h1>Our Heroes in Action</h1>
        <p>Volunteers are the heartbeat of KindConnect. Here's a glimpse of the compassionate individuals who make a difference every day.</p>
        <p>Whether it's planting trees, distributing meals, or teaching kids — every act of kindness counts.</p>
      </div>

      <div className="volunteer-cards">
        {volunteers.map((v, i) => (
          <div className="volunteer-card" key={i}>
            <h3>{v.name}</h3>
            <p className="role">{v.interest}</p>
            <p>{v.description || v.reason}</p>
          </div>
        ))}
      </div>

      <div className="volunteer-form-section">
        <h2>Become a Volunteer</h2>
        <p>Ready to be part of something meaningful? Join our growing network of volunteers and help build a better tomorrow.</p>

        {submitted && (
          <div className="success-msg">
            🎉 Thank you! We'll get in touch soon. 💌
          </div>
        )}
        {submitted && (
          <div className="success-msg">
            🎉 Thank you! We'll get in touch soon. 💌
          </div>
        )}

        <form className="volunteer-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          <select
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            required
          >
            <option value="">Area of Interest</option>
            <option value="Environment">Environment</option>
            <option value="Education">Education</option>
            <option value="Food">Food & Charity</option>
            <option value="Tree Plantation">Tree Plantation</option>
          </select>
          <textarea
            name="reason"
            placeholder="Tell us why you want to volunteer..."
            rows="4"
            value={formData.reason}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Apply Now</button>
        </form>
      </div>
    </div>
  );
};

export default Volunteers; 