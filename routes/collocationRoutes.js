// Required libraries
const express = require('express');
const collocationRoutes = express.Router();
const collocationController = require('../controllers/collocationController');


collocationRoutes.get('/:userId', collocationController.fetch)

module.exports = collocationRoutes;
