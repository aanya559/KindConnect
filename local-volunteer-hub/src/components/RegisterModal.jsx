import React from "react";
import "./Modals.css";

const RegisterModal = ({ onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <h2>Create Your Account</h2>
        <form className="modal-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" required />
          <select required>
            <option value="">Select Role</option>
            <option value="volunteer">Volunteer</option>
            <option value="organizer">Organizer</option>
          </select>
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button type="submit" className="submit-btn">Register</button>
        </form>
        <p className="modal-close" onClick={onClose}>✖ Close</p>
      </div>
    </div>
  );
};

export default RegisterModal;
