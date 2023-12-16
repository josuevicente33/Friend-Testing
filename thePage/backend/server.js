const express = require('express');
const connectDB = require('./db');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = process.env.PORT || 5000; // Default port or 5000

connectDB();

// Middleware for JSON data parsing in POST requests
app.use(express.json());

// Define routes we are using
app.use('/users', userRoutes);

// Define a root route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

