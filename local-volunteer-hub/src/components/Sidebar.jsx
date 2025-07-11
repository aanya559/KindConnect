// Sidebar.jsx
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  FaBars, FaHome, FaChartBar, FaCalendarAlt, FaPlusCircle,
  FaUsers, FaCertificate, FaQuestionCircle,
  FaSignInAlt, FaUserPlus, FaSignOutAlt,
  FaLeaf
} from 'react-icons/fa'
import './Sidebar.css'

export default function Sidebar() {
  const [open, setOpen] = useState(true)
  const { pathname } = useLocation()


    const menuItems = [
  { name: 'Home', path: '/home', icon: <FaHome /> },
  { name: 'Dashboard', path: '/dashboard', icon: <FaChartBar /> },
  { name: 'Events', path: '/events', icon: <FaCalendarAlt /> },
  { name: 'Create Event', path: '/create', icon: <FaPlusCircle /> },
  { name: 'Volunteers', path: '/volunteers', icon: <FaUsers /> },
  { name: 'Certificates', path: '/certificates', icon: <FaCertificate /> },
  // // { name: 'Login', path: '/login', icon: <FaSignInAlt /> },
  // { name: 'Register', path: '/register', icon: <FaUserPlus /> },
   // moved here ✅
  // { name: 'Logout', path: '/logout', icon: <FaSignOutAlt /> },
  { name: 'Help', path: '/help', icon: <FaQuestionCircle /> },
];



  return (
    <>
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <FaBars />
      </div>

      <div className={`sidebar ${open ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          {/* <FaLeaf size={36} style={{ color: '#00e5ff' }} /> */}
        </div>

        <ul className="sidebar-menu">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`sidebar-item ${pathname === item.path ? 'active' : ''}`}
            >
              <Link to={item.path}>
                <span className="icon">{item.icon}</span>
                {open && <span>{item.name}</span>}
                {!open && <span className="tooltip">{item.name}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
