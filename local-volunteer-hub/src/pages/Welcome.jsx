import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { FaBars } from "react-icons/fa";
import "./Welcome.css";

const Welcome = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="welcome-wrapper">
      {/* Sidebar */}
      <div className={`sidebar-toggle ${sidebarOpen ? "open" : ""}`}>
        {sidebarOpen && <Sidebar />}
      </div>

      {/* Hamburger */}
      <button className="hamburger-btn" onClick={toggleSidebar}>
        <FaBars />
      </button>

      {/* Welcome Card */}
      <div className="welcome-container">
        <div className="welcome-card">
          <h1>Welcome to <span>KindConnect</span></h1>
          <p className="tagline">Where Compassion Meets Action 💖</p>
          <p className="mission">
            Join a community that believes in the power of small acts making big differences.
            From tree plantations to teaching drives, your time can change lives.
          </p>
          <div className="welcome-actions">
            <Link to="/register" className="btn primary">🌱 Register Now</Link>
            <Link to="/login" className="btn secondary">Already a Member? Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
