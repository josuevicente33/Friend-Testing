import React, { useContext, useEffect } from 'react';
import AuthContext from '../contexts/AuthContext'; // Import AuthContext
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { isLoggedIn, userData } = useContext(AuthContext); // Use AuthContext
  const navigate = useNavigate();

  // Redirect if not logged in
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  return (
    <div>
      {isLoggedIn && userData ? (
        <p>Welcome, {userData.username}</p>
      ) : (
        <p>Please log in.</p>
      )}
    </div>
  );
};

export default Dashboard;
