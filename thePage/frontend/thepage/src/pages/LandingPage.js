import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Import the CSS file

function LandingPage() {
  return (
    <div className="landing-container">
      <h1>Hello, welcome to The Page</h1>
      <Link to="/register" className="register-link">
        <button className="register-button">Register</button>
      </Link>
    </div>
  );
}

export default LandingPage;
