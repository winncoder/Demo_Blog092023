const Movie = require('../models/Movie');
const { mongooseToObject } = require('../../util/mongoose');

class MovieController {
    //[GET] /movies/:slug // GET là lấy dữ liệu
    async show(req, res, next) {
        try {
            const movie = await Movie.findOne({ slug: req.params.slug });
            res.render('movies/show', { movies: mongooseToObject(movie) });
        } catch (next) {}
        // res.send('MOVIE DETAIL - ' + req.params.slug);
    }

    //[POST] /movies/create
    async create(req, res, next) {
        try {
            const movie = await Movie.findOne({ slug: req.params.slug });
            res.render('movies/create', { movies: mongooseToObject(movie) });
        } catch (next) {}
    }

    //[POST] /movies/cinema POST là tạo thêm 1 tài nguyên ../../util/mongoose
    async cinema(req, res, next) {
        // res.json(req.body);

        const movie = new Movie(req.body);
        try {
            await movie.save();
            res.redirect('/');
        } catch (error) {
            next(error);
        }
    }

    
}

module.exports = new MovieController();
