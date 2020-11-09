const express = require('express');
const routes = express.Router();

// const authMiddleware = require('./middleware/auth');

const Controller = require('./controllers/Controller');

routes.post('/product', Controller.product)
routes.post('/register', Controller.register)
routes.post('/wishlist', Controller.wishlist)


module.exports = routes;