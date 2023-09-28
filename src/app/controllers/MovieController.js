const Movie = require('../models/Movie');
const { mongooseToObject } = require('../../util/mongoose');

class MovieController {
    //[GET] /movies/:slug
    async show(req, res) {
        try {
            const movies = await Movie.findOne({ slug: req.params.slug });
            res.render('movies/show', { movies: mongooseToObject(movies) });
        } catch (next) {}
        // res.send('MOVIE DETAIL - ' + req.params.slug);
    }
}

module.exports = new MovieController();
