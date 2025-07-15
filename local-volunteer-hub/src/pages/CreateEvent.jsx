
import React, { useState } from 'react';
import axios from 'axios';
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
    if (!form.title) newErrors.title = 'Please enter an event title.';
    if (!form.description) newErrors.description = 'Description cannot be empty.';
    if (!form.date) newErrors.date = 'Choose a date for your event.';
    if (!form.time) newErrors.time = 'Specify the event time.';
    if (!form.location) newErrors.location = 'Where is the event happening?';
    if (!form.volunteers) newErrors.volunteers = 'How many volunteers do you need?';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
    } else {
      try {
        const res = await axios.post('http://localhost:5000/api/events', form);
        alert('🎉 Event Created Successfully!');
        console.log(res.data);
        setForm({
          title: '',
          description: '',
          date: '',
          time: '',
          location: '',
          volunteers: ''
        });
      } catch (error) {
        console.error('Error creating event:', error);
        alert('Something went wrong while creating the event.');
      }
    }
  };

  return (
    <div className="create-event-container">
      <div className="event-left">
        <h1>Create a Ripple of Change</h1>
        <p>
          Hosting a volunteer event is one of the most powerful ways to inspire social impact.
          With KindConnect, you're not just planning — you're empowering communities and shaping futures.
        </p>
        <p>
          Whether it’s a beach cleanup, a tree plantation, a skill-building workshop, or a donation drive — your efforts can change lives.
        </p>
        <p style={{ marginTop: '15px', fontStyle: 'italic', color: '#2d3436' }}>
          💡 Pro Tip: Keep your event name and description clear, engaging, and action-driven to attract more volunteers!
        </p>
      </div>

      <div className="event-right">
        <form className="event-form" onSubmit={handleSubmit}>
          <h2>Event Details</h2>

          <label>Event Title</label>
          <input
            name="title"
            type="text"
            value={form.title}
            onChange={handleChange}
            placeholder="e.g., Tree Plantation Drive"
          />
          {errors.title && <p className="error">{errors.title}</p>}

          <label>Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Describe the purpose and goals of the event"
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
            placeholder="e.g., Community Park, Mumbai"
          />
          {errors.location && <p className="error">{errors.location}</p>}

          <label>Volunteers Needed</label>
          <input
            name="volunteers"
            type="number"
            value={form.volunteers}
            onChange={handleChange}
            placeholder="e.g., 15"
          />
          {errors.volunteers && <p className="error">{errors.volunteers}</p>}

          <button type="submit" className="create-btn">Publish Event</button>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
