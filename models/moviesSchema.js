const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  movieName: {
    type: String,
    required: true,
  },
  theatreName: {
    type: String,
    required: true,
  },
  theatreLocation: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model('movies', movieSchema);
