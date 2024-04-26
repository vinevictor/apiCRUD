const express = require('express');
const router = express.Router();

const userController = require('./controllers/userController')

router.get('/users', userController.buscarTodos)
router.get('/user/:id', userController.buscarId);
router.post('/user', userController.inserir);
router.put('/user/:id', userController.alterar)
router.delete('/user/:id', userController.excluir)

module.exports = router;
