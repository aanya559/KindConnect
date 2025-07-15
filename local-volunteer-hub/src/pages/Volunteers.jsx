 import React, { useState } from 'react';
import './Volunteers.css';

const Volunteers = () => {
  const [submitted, setSubmitted] = useState(false);

  const volunteers = [
    {
      name: "Aarav Singh",
      role: "Environment Volunteer",
      desc: "Passionate about sustainability and nature.",
    },
    {
      name: "Isha Mehta",
      role: "Food Drive Coordinator",
      desc: "Helping feed the hungry one meal at a time.",
    },
    {
      name: "Rohan Desai",
      role: "Teaching Assistant",
      desc: "Empowering children through education.",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    e.target.reset();
  };

  return (
    <div className="volunteer-page">
      <div className="volunteer-header">
        <h1> Our Heroes in Action</h1>
        <p>
          Volunteers are the heartbeat of KindConnect. Here's a glimpse of the compassionate individuals who make a difference every day.
        </p>
        <p>
          Whether it's planting trees, distributing meals, or teaching kids — every act of kindness counts.
        </p>
      </div>

      <div className="volunteer-cards">
        {volunteers.map((v, i) => (
          <div className="volunteer-card" key={i}>
            <h3>{v.name}</h3>
            <p className="role">{v.role}</p>
            <p>{v.desc}</p>
          </div>
        ))}
      </div>

      <div className="volunteer-form-section">
        <h2> Become a Volunteer</h2>
        <p>
          Ready to be part of something meaningful? Join our growing network of volunteers and help build a better tomorrow.
        </p>
        <p>
          Fill out the form below and our team will reach out to guide you on your volunteering journey.
        </p>

        {submitted && (
          <div className="success-msg">
            🎉 Thank you! We'll get in touch soon. 💌
          </div>
        )}

        <form className="volunteer-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" />
          <select required>
            <option value="">Area of Interest</option>
            <option value="Environment">Environment</option>
            <option value="Education">Education</option>
            <option value="Food">Food & Charity</option>
          </select>
          <textarea placeholder="Tell us why you want to volunteer..." rows="4" required></textarea>
          <button type="submit">Apply Now</button>
        </form>
      </div>
    </div>
  );
};

export default Volunteers; 