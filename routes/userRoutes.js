// Required libraries
const express = require('express');
const userRoutes = express.Router();
const userController = require('../controllers/userController');

userRoutes.post('/', userController.create);
userRoutes.post('/login', userController.login);
userRoutes.post('/collocation', userController.save)
userRoutes.delete('/collocation', userController.delete)
// userRoutes.get('/verify', userController.verify); // stretch goal
// userRoutes.get('/collocation', userController.fetch)

module.exports = userRoutes;
