import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { FaSeedling, FaUserCircle } from 'react-icons/fa';

export default function Navbar() {
  const { pathname } = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

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

  // 🔄 Watch for changes to localStorage (cross-tab or same tab)
  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem('token'));
    };

    window.addEventListener('storage', handleStorageChange);
    // also useful on the same tab
    const interval = setInterval(handleStorageChange, 1000); 

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Create Event', path: '/create' },
    { name: 'Volunteers', path: '/volunteers' },
    { name: 'Help', path: '/help' },
  ];

  return (
    <nav className="fancy-navbar">
      <div className="navbar-left">
        <FaSeedling className="logo-icon" />
        <span className="navbar-title">KindConnect</span>
      </div>

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

        <div className="avatar-container" ref={dropdownRef}>
          <FaUserCircle
            className="avatar-icon"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />
          {dropdownOpen && (
            <div className="dropdown-menu">
              {isLoggedIn ? (
                <>
                  <Link to="/profile">Profile</Link>
                  <Link to="/logout">Logout</Link>
                </>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
