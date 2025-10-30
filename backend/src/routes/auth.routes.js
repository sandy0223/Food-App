const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const foodRoutes = require('./food.routes');


//user api routes
router.post('/user/register', authController.registerUser);
router.post('/user/login', authController.loginUser);
router.post('/user/logout', authController.logoutUser);

//food partner api routes
router.post('/food-partner/register', authController.registerFoodPartner);
router.post('/food-partner/login', authController.loginFoodPartner);
router.post('/food-partner/logout', authController.logoutFoodPartner);

module.exports = router;