const express = require('express');
const route = express.Router();

//IMPORTS
const usuarioController = require('../controller/usuarioController');
const reservaController = require('../controller/reservaController');

//ENDPOINTS USUARIOS
route.get('/usuario', usuarioController.read);
route.get('/usuario/:id', usuarioController.read);
route.post('/usuario', usuarioController.create);
route.put('/usuario/:id', usuarioController.update);
route.delete('/usuario/:id', usuarioController.remove);
route.post('/loginmobile', usuarioController.loginmobile);
route.post('/login', usuarioController.login);

//ENDPOINTS RESERVAS
route.get('/reserva', reservaController.read);
route.get('/reserva/:id', reservaController.read);
route.post('/reserva', reservaController.create);

route.put('/reserva/:id', reservaController.update);
route.delete('/reserva/:id', reservaController.remove);

module.exports = route;