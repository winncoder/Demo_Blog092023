const newRouter = require('./news');
const movieRouter = require('./movies');
const siteRouter = require('./site');

function route(app) {
    app.use('/news', newRouter);
    app.use('/movies', movieRouter);
    app.use('/', siteRouter);
}

module.exports = route;
