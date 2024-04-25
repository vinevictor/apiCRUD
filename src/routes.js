const express = require('express');
const router = express.Router();

const userController = require('./controllers/userController')

router.get('/users', userController.buscarTodos)
router.get('/user/:id', userController.buscarId);

module.exports = router;
