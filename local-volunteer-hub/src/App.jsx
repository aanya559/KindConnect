import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import './App.css';

// Import page components
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Events from './pages/Events';
import CreateEvent from './pages/CreateEvent';
import Volunteers from './pages/Volunteers';
import Help from './pages/Help';
import Certificates from './pages/Certificates';
import Register from './pages/Register';
import Login from './pages/Login';
import Logout from './pages/Logout';
// (Add other imports as needed)

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
           <Route path="/events" element={<Events/>} />
            <Route path="/create" element={<CreateEvent />} /> {/* ✅ */}
            <Route path="/volunteers" element={<Volunteers/>} />
            <Route path="/certificates" element={<Certificates/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/help" element={<Help />} />
            <Route path="/logout" element={<Logout/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
