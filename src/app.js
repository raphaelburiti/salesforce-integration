const express = require('express');
const cors = require('cors')
// const path = require('path')

const routes = require('./routes');

// require('./database')

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

module.exports = app