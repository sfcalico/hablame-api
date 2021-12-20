// Required libraries
const express = require('express');
const userRoutes = express.Router();
const userController = require('../controllers/userController');

userRoutes.post('/signup', userController.create);
userRoutes.post('/login', userController.login);
userRoutes.post('/collocation', userController.save)
userRoutes.delete('/collocation/:collocationId', userController.delete)
// userRoutes.get('/verify', userController.verify); // stretch goal

module.exports = userRoutes;
