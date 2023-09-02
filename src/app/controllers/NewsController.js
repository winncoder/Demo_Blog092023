class NewsController {
    //[GET] /news
    index(req, res) {
        res.render('news');
    }

    //[GET] /news/:slug(slug=biến động)
    show(req, res) {
        res.send('TEST');
    }
}

module.exports = new NewsController();
