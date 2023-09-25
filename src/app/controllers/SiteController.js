const Movie = require('../models/Movie');
const { mutilpleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    //[GET] /

    async home(req, res) {
        try {
            const movies = await Movie.find({});
            res.render('home', { movies: mutilpleMongooseToObject(movies) });
        } catch (err) {
            res.status(400).json({ error: 'ERROR!!!' });
        }
    }
    //[GET] /news/:slug(slug=biến động)
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
