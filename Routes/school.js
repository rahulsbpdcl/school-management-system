const express= require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.post('/createuser', userController.createUser);
router.post('/login', userController.login);