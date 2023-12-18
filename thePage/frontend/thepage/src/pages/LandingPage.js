import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import AuthContext from '../contexts/AuthContext'; // Import AuthContext

import '../styles/LandingPage.css';

function LandingPage() {
  const { isLoggedIn, setIsLoggedIn, setUserData } = useContext(AuthContext); // Use object destructuring

  const handleLogin = async (username, password) => {
    try {
      const response = await fetch('http://localhost:5000/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        setIsLoggedIn(true);
        setUserData({ username: username }); // Assuming you want to store the username in userData
      } else {
        // Handle login error
      }
    } catch (error) {
      // Handle network or server error
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem('token'); // Remove the token from local storage
    setIsLoggedIn(false);
    setUserData(null); // Clear user data
  };

  return (
    <div className="landing-container">
      <h1>Hello, welcome to The Page</h1>
      {isLoggedIn ? (
        <div>
          <p>You are logged in.</p>
          <button onClick={handleSignOut} className="sign-out-button">Sign Out</button>
        </div>
      ) : (
        <div>
          <p>Please log in.</p>
          <LoginForm onLogin={handleLogin} />
          <Link to="/register" className="register-link">
            <button className="register-button">Register</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default LandingPage;
