import React, { useState } from 'react';
import './CreateEvent.css';

const CreateEvent = () => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    volunteers: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.title) newErrors.title = 'Title is required';
    if (!form.description) newErrors.description = 'Description is required';
    if (!form.date) newErrors.date = 'Date is required';
    if (!form.time) newErrors.time = 'Time is required';
    if (!form.location) newErrors.location = 'Location is required';
    if (!form.volunteers) newErrors.volunteers = 'Volunteers needed is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
    } else {
      alert('Event Created Successfully!');
      setForm({
        title: '',
        description: '',
        date: '',
        time: '',
        location: '',
        volunteers: ''
      });
    }
  };

  return (
    <div className="create-event-container">
      <div className="event-left">
        <h1>Start a New<br />Volunteering Journey</h1>
        <p>
          Organize an event, inspire action, and bring positive change.
          Fill out the form and start making an impact today!
        </p>
        <p style={{ marginTop: '15px' }}>
          Hosting your own event lets you take the lead in making the world a better place.
          From educational sessions to environmental campaigns, your ideas can spark transformation!
        </p>
        <p style={{ marginTop: '15px', fontStyle: 'italic', color: '#555' }}>
          💡 Tip: Be clear and concise in your event description to attract the right volunteers!
        </p>
      </div>

      <div className="event-right">
        <form className="event-form" onSubmit={handleSubmit}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#ff5f6d' }}>
            Event Details Form
          </h2>

          <label>Event Title</label>
          <input
            name="title"
            type="text"
            value={form.title}
            onChange={handleChange}
            placeholder="Tree Plantation Drive"
          />
          {errors.title && <p className="error">{errors.title}</p>}

          <label>Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="What is your event about?"
          />
          {errors.description && <p className="error">{errors.description}</p>}

          <label>Date</label>
          <input
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
          />
          {errors.date && <p className="error">{errors.date}</p>}

          <label>Time</label>
          <input
            name="time"
            type="time"
            value={form.time}
            onChange={handleChange}
          />
          {errors.time && <p className="error">{errors.time}</p>}

          <label>Location</label>
          <input
            name="location"
            type="text"
            value={form.location}
            onChange={handleChange}
            placeholder="e.g., Central Park, NY"
          />
          {errors.location && <p className="error">{errors.location}</p>}

          <label>Volunteers Needed</label>
          <input
            name="volunteers"
            type="number"
            value={form.volunteers}
            onChange={handleChange}
            placeholder="10"
          />
          {errors.volunteers && <p className="error">{errors.volunteers}</p>}

          <button type="submit" className="create-btn">Create Event</button>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
