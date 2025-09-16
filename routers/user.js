const express = require('express');
const router = express.Router();

const userControllerClass  = require('../controllers/user');
const userController = new userControllerClass();

// POST / - register new user
router.post('/register', (req, res) => {
    userController.register(req, res);
});


// POST / - login user
router.post('/login', (req, res) => {
    userController.login(req, res);
});

// POST / - logout user
router.post('/logout', (req, res) => {
    userController.logout(req, res);
});

module.exports = router;