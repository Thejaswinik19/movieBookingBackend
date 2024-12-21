const Movie = require('../models/movie'); // Assuming the movie model is in the models folder

// Fetch all movies from the database
const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find(); // Find all movies in the database
    res.status(200).json(movies); // Return the list of movies as a JSON response
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching movies from the database.' });
  }
};

// Fetch a specific movie by ID
const getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id); // Find movie by ID from URL params
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found.' });
    }
    res.status(200).json(movie); // Return the movie data
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching movie.' });
  }
};

// Add a new movie to the database
const addMovie = async (req, res) => {
  try {
    const newMovie = new Movie(req.body); // Create a new movie document using request body data
    await newMovie.save(); // Save the movie to the database
    res.status(201).json(newMovie); // Return the newly created movie
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error adding new movie.' });
  }
};

// Update an existing movie by ID
const updateMovie = async (req, res) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(
      req.params.id, // The movie ID from the URL
      req.body, // The updated movie data from the request body
      { new: true } // Return the updated movie document
    );
    if (!updatedMovie) {
      return res.status(404).json({ message: 'Movie not found.' });
    }
    res.status(200).json(updatedMovie); // Return the updated movie
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating movie.' });
  }
};

// Delete a movie by ID
const deleteMovie = async (req, res) => {
  try {
    const deletedMovie = await Movie.findByIdAndDelete(req.params.id); // Delete movie by ID
    if (!deletedMovie) {
      return res.status(404).json({ message: 'Movie not found.' });
    }
    res.status(200).json({ message: 'Movie deleted successfully.' }); // Return success message
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error deleting movie.' });
  }
};

module.exports = {
  getAllMovies,
  getMovieById,
  addMovie,
  updateMovie,
  deleteMovie,
};
