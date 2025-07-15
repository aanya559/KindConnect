
 import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { FaSeedling, FaUserCircle } from 'react-icons/fa';

export default function Navbar() {
  const { pathname } = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  // Auto-close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuItems = [
    { name: 'Home', path: '/' },
    // { name: 'Dashboard', path: '/dashboard' },
    { name: 'Events', path: '/events' },
    { name: 'Create Event', path: '/create' },
    { name: 'Volunteers', path: '/volunteers' },
    // { name: 'Certificates', path: '/certificates' },
    { name: 'Help', path: '/help' },
  ];

  return (
    <nav className="fancy-navbar">
      {/* Left: Logo + Title */}
      <div className="navbar-left">
        <FaSeedling className="logo-icon" />
        <span className="navbar-title">KindConnect</span>
      </div>

      {/* Right: Links + Profile */}
      <div className="navbar-right">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`nav-link ${pathname === item.path ? 'active' : ''}`}
          >
            {item.name}
          </Link>
        ))}

        {/* Avatar & Dropdown */}
        <div className="avatar-container" ref={dropdownRef}>
          <FaUserCircle
            className="avatar-icon"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />
          {dropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/profile">Profile</Link>
            
              <Link to="/login">Logout</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
