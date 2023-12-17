import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router-dom for routing
import '../styles/Navbar.css'; // Adjust the path as needed

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/about">About</Link>
      </div>
      
      <div className="dropdown">
        <button onClick={toggleDropdown}>Menu</button>
        {isDropdownOpen && (
          <div className="dropdown-content">
            <Link to="/profile">Profile</Link>
            <Link to="/settings">Settings</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
