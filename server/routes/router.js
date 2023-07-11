const express = require('express');
const router = express.Router();

const authController = require('../controller/authController');
const hotelController = require('../controller/hotalController');
const verifyToken = require('../middlewares/verifyToken');

router.post('/login', authController.login);
router.post('/register', authController.register);

router.get('/users-profile/:id', verifyToken, authController.userProfile)
router.get('/get-hotels', verifyToken, hotelController.getHotels)

module.exports=router;