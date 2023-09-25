const Movie = require('../models/Movie');
const { mutilpleMongooseToObject } = require('../../util/mongoose');

class MovieController {
    //[GET] /movies/:slug
    async show(req, res) {
        try {
            const movies = await Movie.findOne({ slug: req.params.slug });
            res.render('movies/show');
        } catch (next) {}
        // res.send('MOVIE DETAIL - ' + req.params.slug);
    }
}

module.exports = new MovieController();
