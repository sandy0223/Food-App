const express = require('express');
const Router = express.Router();
const foodController = require('../controllers/food.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const multer = require('multer');

const upload = multer({
    storage: multer.memoryStorage(),
});


Router.post('/',
    authMiddleware.authFoodPartnerMiddleware,
    upload.single('video'),
    foodController.createFood
);

module.exports = Router;