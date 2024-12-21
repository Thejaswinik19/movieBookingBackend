const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: String,
  rating: Number,
  releaseYear: Number
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
