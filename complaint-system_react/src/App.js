import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import StudentRegister from "./components/StudentRegister";
import AdminRegister from "./components/AdminRegister";
import StudentLogin from "./components/StudentLogin";
import AdminLogin from "./components/AdminLogin";
import Complaint from "./components/Complaint";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/student-register">Student Register</Link>
            </li>
            <li>
              <Link to="/admin-register">Admin Register</Link>
            </li>
            <li>
              <Link to="/student-login">Student Login</Link>
            </li>
            <li>
              <Link to="/admin-login">Admin Login</Link>
            </li>
            <li>
              <Link to="/complaint">Complaint</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student-register" element={<StudentRegister />} />
          <Route path="/admin-register" element={<AdminRegister />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/complaint" element={<Complaint />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
