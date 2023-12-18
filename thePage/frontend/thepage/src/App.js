import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import RegisterPage from './pages/RegisterPage';
import Navbar from './components/Navbar';
import DashboardPage from './pages/DashboardPage';
import { AuthProvider } from './contexts/AuthContext';

import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <AuthProvider>
    <Router>
    <Navbar />
    
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>

    <Footer />
    </Router>
    </AuthProvider>
    </>


/* <div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>
</div> */

  );
}

export default App;
