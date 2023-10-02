const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema; //sờ kim

mongoose.plugin(slug);

const Movie = new Schema({
    name: { type: String, require: true },
    movieInfo: { type: String, require: true },
    genre: { type: String, require: true, maxLength: 255 },
    director: { type: String, require: true, maxLength: 255 },
    image: { type: String, require: true },
    trailerId: { type: String, require: true },
    slug: { type: String, slug: 'name', unique: true },
    releaseDate: { type: String, default: Date.now },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Movie', Movie);
