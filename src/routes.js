const express = require('express');
const routes = express.Router();

const Controller = require('./controllers/Controller');

routes.post('/navigation', Controller.navigation);
routes.post('/register', Controller.register);
routes.post('/wishlist', Controller.wishlist);
routes.get('/status/:id', Controller.status);

module.exports = routes;