import React, { useState } from 'react';
import './Events.css';

const sampleEvents = [
  {
    title: ' Tree Plantation Drive',
    date: ' July 10, 2025',
    location: ' Eco Park, Delhi',
    desc: 'Join us in making the city greener by planting trees. Tools and refreshments provided.',
    category: 'Environment',
  },
  {
    title: ' Food Distribution Camp',
    date: ' July 14, 2025',
    location: ' Community Hall, Mumbai',
    desc: 'Help distribute meals to underprivileged communities. Volunteers needed in shifts.',
    category: 'Health',
  },
  {
    title: ' Teaching Session',
    date: ' July 20, 2025',
    location: ' Learning Center, Bangalore',
    desc: 'Spend a weekend teaching basic math and reading to children in need.',
    category: 'Education',
  },
  {
    title: ' Hygiene Awareness Workshop',
    date: ' July 25, 2025',
    location: ' Govt School, Chennai',
    desc: 'Conduct workshops for young girls and educate about hygiene practices.',
    category: 'Health',
  },
  {
    title: ' Water Conservation Drive',
    date: ' July 28, 2025',
    location: '  Community Center, Pune',
    desc: 'Raise awareness about water conservation in local communities.',
    category: 'Environment',
  },
];

const Events = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [visibleCount, setVisibleCount] = useState(3);

  const handleJoin = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedEvent(null);
  };

  return (
    <div className="events-page">
      <div className="events-header">
        <h1>Explore Upcoming Volunteering Events</h1>
        <p>Find opportunities to make a difference in your community</p>
      </div>

      <div className="filter-bar">
        <input type="text" placeholder="Search by location, type, or name..." />
        <button className="filter-btn">Filter</button>
      </div>

      <div className="events-grid">
        {sampleEvents.slice(0, visibleCount).map((event, index) => (
          <div className="event-card" key={index}>
            <h3>{event.title}</h3>
            <p className="date">{event.date}</p>
            <p className="location">{event.location}</p>
            <div className={`tag ${event.category.toLowerCase()}`}>{event.category}</div>
            <p className="desc">{event.desc}</p>
            <button className="join-btn" onClick={() => handleJoin(event)}>Join Event</button>
          </div>
        ))}
      </div>

      {visibleCount < sampleEvents.length && (
        <div className="load-more-container">
          <button className="load-more-btn" onClick={() => setVisibleCount(visibleCount + 2)}>
            Load More
          </button>
        </div>
      )}

      {showModal && selectedEvent && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>You're Joining</h2>
            <p className="modal-title">{selectedEvent.title}</p>
            <p>{selectedEvent.date}</p>
            <p>{selectedEvent.location}</p>
            <p>{selectedEvent.desc}</p>
            <button className="close-modal" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
