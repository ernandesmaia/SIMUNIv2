const express = require('express');
const routes = express.Router();

const GeralController = require('./app/controller/GeralController');
const SIMController = require('./app/controller/SIMController');

//routes.get('/num', GeralController.testeAleatorio);
//routes.get('/', GeralController.natalidadeTotal);
routes.get('/', GeralController.metodosNatalidade);
routes.get('/SIM', SIMController.metodosMortalidade);

module.exports = routes;