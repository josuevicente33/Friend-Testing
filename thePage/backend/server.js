const express = require('express');
const connectDB = require('./db');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');


const app = express();
const port = process.env.PORT || 5000; // Default port or 5000

connectDB();

// Middleware for JSON data parsing in POST requests
app.use(express.json());
app.use(cors()); 

// Define routes we are using
app.use('/users', userRoutes);

// Define a root route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});

