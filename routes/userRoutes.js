// Required libraries
const express = require('express');
const userRoutes = express.Router();
const userController = require('../controllers/userController');

userRoutes.post('/', userController.create);
userRoutes.post('/login', userController.login);
// userRoutes.get('/verify', userController.verify); // stretch goal
// userRoutes.post('/collocation', userController.save)
// userRoutes.get('/collocation', userController.fetch)
// userRoutes.delete('/collocation', userController.delete)

module.exports = userRoutes;
