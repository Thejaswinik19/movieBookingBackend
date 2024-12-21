const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const movieRoutes = require('./routes/movieRoutes'); // Make sure this path is correct

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/moviedb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected...'))
  .catch((err) => console.error('Database connection error:', err));

// Use movie routes
app.use('/api', movieRoutes);

// Start server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
