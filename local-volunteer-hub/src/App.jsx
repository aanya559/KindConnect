import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Events from "./pages/Events";
import Certificates from "./pages/Certificates";
import Help from "./pages/Help";
import Dashboard from "./pages/Dashboard";
import Volunteers from "./pages/Volunteers";
import CreateEvent from "./pages/CreateEvent";
import Register from "./pages/Register";
import Login from "./pages/Login";
import MainLayout from "./layouts/MainLayout";
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Routes>
       
        
        {/* Pages wrapped in MainLayout (Navbar included) */}
        <Route path="/profile" element={<MainLayout><Profile /></MainLayout>} />
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/dashboard" element={<MainLayout><Dashboard /></MainLayout>} />
        <Route path="/events" element={<MainLayout><Events /></MainLayout>} />
        <Route path="/create" element={<MainLayout><CreateEvent /></MainLayout>} />
        <Route path="/volunteers" element={<MainLayout><Volunteers /></MainLayout>} />
        <Route path="/certificates" element={<MainLayout><Certificates /></MainLayout>} />
        <Route path="/help" element={<MainLayout><Help /></MainLayout>} />
        <Route path="/register" element={<MainLayout><Register /></MainLayout>} />
        <Route path="/login" element={<MainLayout><Login /></MainLayout>} />
      </Routes>
    </Router>
  );
}

export default App;
