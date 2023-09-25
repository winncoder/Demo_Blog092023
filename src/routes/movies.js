const express = require('express');
const router = express.Router();
const movieController = require('../app/controllers/MovieController');

// newsController.index
router.get('/:slug', movieController.show);

module.exports = router;
