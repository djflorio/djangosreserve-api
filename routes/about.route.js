const express = require('express');
const router = express.Router();

// Require the controllers
const about_controller = require('../controllers/about.controller');

router.get('/test', about_controller.test);

module.exports = router;