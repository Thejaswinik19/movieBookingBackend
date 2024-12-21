const mongoose = require('mongoose');
const Movie = require('./models/movie'); // Assuming movie model is defined in models/movie.js

// MongoDB connection string (use the one that matches your setup)
const mongoURI = 'mongodb://localhost:27017/moviedb'; // Change if using Atlas

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');

    // Insert sample movies
    const movies = [
      {
        title: 'Inception',
        genre: 'Sci-Fi',
        rating: 8.8,
        releaseYear: 2010
      },
      {
        title: 'The Dark Knight',
        genre: 'Action',
        rating: 9.0,
        releaseYear: 2008
      },
      {
        title: 'Interstellar',
        genre: 'Sci-Fi',
        rating: 8.6,
        releaseYear: 2014
      }
    ];

    Movie.insertMany(movies)
      .then(() => {
        console.log('Movies inserted successfully');
        mongoose.connection.close(); // Close the connection after inserting data
      })
      .catch(err => {
        console.error('Error inserting movies:', err);
        mongoose.connection.close();
      });
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });
