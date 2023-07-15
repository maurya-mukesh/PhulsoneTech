const express = require('express');
const router = express.Router();

const authController = require('../controller/authController');
const hotelController = require('../controller/hotelController');
const verifyToken = require('../middleware/verifyToken');
const joiValidation = require('../middleware/Joi')

router.post('/login', authController.login);
router.post('/register', joiValidation, authController.register);

router.get('/users-profile/:id', verifyToken, authController.userProfile)
router.get('/get-hotels', verifyToken, hotelController.getHotels)

module.exports=router;