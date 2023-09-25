const mongoose = require('mongoose');
const Schema = mongoose.Schema; //sờ kim

const Movie = new Schema({
    name: { type: String, maxLength: 255 },
    movieInfo: { type: String },
    genre: { type: String, maxLength: 255 },
    director: { type: String, maxLength: 255 },
    image: { type: String },
    releaseDate: { type: String, default: Date.now },
});

module.exports = mongoose.model('Movie', Movie);
