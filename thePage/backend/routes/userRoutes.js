const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

// Authentication routes - could be seprated into a separate file
router.post('/login', authController.login);
router.post('/register', authController.register);

// user CRUD routes for user management
router.post('/', userController.createUser);
router.get('/', userController.getAllUsers);
router.patch('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
