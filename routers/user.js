const express = require('express');
const router = express.Router();

const userControllerClass  = require('../controllers/user');
const userController = new userControllerClass();

// POST / - register new user
router.post('/register', (req, res) => {
    userController.register(req, res);
});

module.exports = router;