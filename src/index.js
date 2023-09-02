const express = require('express');
const path = require('path');
const morgan = require('morgan');
const hbs = require('express-handlebars');
const app = express();
const port = 3000;

        const route = require('./routes');

// Use static file
    app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true })); //milddeware xử lý dữ liệu từ clien gửi đên controller
app.use(express.json());

// HTTP logger
// app.use(morgan('combined'));

// Template engine
app.engine('hbs', hbs.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Route init
route(app);

// Local host --- Hosting
// Action ---> Dispatcher ---> Function handler

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
