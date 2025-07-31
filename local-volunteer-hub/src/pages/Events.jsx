import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import './Events.css';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get('http://localhost:5050/api/events/getall');
        setEvents(res.data);
      } catch (err) {
        console.error('Failed to fetch events:', err);
      }
    };

    fetchEvents();
  }, []);

  const handleJoin = async (event) => {
    const token = localStorage.getItem('token'); // adjust if token is named differently
    console.log('Joining event with token', token);

    try {
      await axios.post(
        `http://localhost:5050/api/events/join/${event._id}`,
        {},
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSelectedEvent(event);
      setShowModal(true);
    } catch (err) {
      if (err.response && err.response.status === 401) {
          navigate('/login');
      } else {
        console.error('Error joining event:', err);
        alert('Something went wrong. Please try again.');
      }
    }
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

      {/* <div className="filter-bar">
        <input type="text" placeholder="Search by location, type, or name..." />
        <button className="filter-btn">Filter</button>
      </div> */}

      <div className="events-grid">
        {events.slice(0, visibleCount).map((event, index) => (
          <div className="event-card" key={event._id || index}>
            <h3>{event.title}</h3>
            <p className="date">{event.date}</p>
            <p className="location">{event.location}</p>
            <div className={`tag ${event.category?.toLowerCase() || 'general'}`}>
              {event.category || 'General'}
            </div>
            <p className="desc">{event.description}</p>
            <button className="join-btn" onClick={() => handleJoin(event)}>
              Join Event
            </button>
          </div>
        ))}
      </div>

      {visibleCount < events.length && (
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
            <p>{selectedEvent.description}</p>
            <button className="close-modal" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
