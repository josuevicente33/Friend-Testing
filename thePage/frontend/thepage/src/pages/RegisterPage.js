import React , { useState } from 'react';
import './RegisterPage.css'; // Import the CSS file for styling

function RegisterPage() {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          // Replace with your backend API endpoint
          const response = await fetch('http://localhost:5000/users/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
          });
      
          if (response.ok) {
            console.log('User registered successfully');
            // Handle successful registration (e.g., redirect to login page)
          } else {
            console.log('Registration failed');
            // Handle registration failure
          }
        } catch (error) {
          console.error('Error:', error);
          // Handle errors
        }
      };
      

      return (
        <div className="register-container">
          <h2>Register</h2>
          <form className="register-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      );
}

export default RegisterPage;
