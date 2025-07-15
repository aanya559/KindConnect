import React from "react";
import "./Modals.css";

const LoginModal = ({ onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <h2>Welcome Back</h2>
        <form className="modal-form">
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="submit-btn">Login</button>
        </form>
        <p className="modal-close" onClick={onClose}>✖ Close</p>
      </div>
    </div>
  );
};

export default LoginModal;
