const express = require('express');
const router = express.Router();
const Movie = require('../models/movie'); // Assuming movie model is in models folder

// Route to get all movies
router.get('/movies', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).send('Error retrieving movies');
  }
});

// Route to get a movie by its ID
router.get('/movies/:id', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id); // Find movie by ID
    if (!movie) {
      return res.status(404).send('Movie not found');
    }
    res.json(movie);
  } catch (err) {
    res.status(500).send('Error retrieving movie');
  }
});

// Route to add a new movie
router.post('/movies', async (req, res) => {
  const { title, genre, showtime, seats } = req.body;

  const newMovie = new Movie({
    title,
    genre,
    showtime,
    seats,
  });

  try {
    await newMovie.save();
    res.status(201).json(newMovie);
  } catch (err) {
    res.status(500).send('Error adding movie');
  }
});

module.exports = router;
