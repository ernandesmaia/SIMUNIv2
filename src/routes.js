const express = require('express');
const routes = express.Router();

const GeralController = require('./app/controller/GeralController');
routes.get('/', GeralController.mostrarSexo);
routes.get('/num', GeralController.testeAleatorio);


module.exports = routes;