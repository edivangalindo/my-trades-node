'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

// Rotas
const index = require('./routes/index');
const trade = require('./routes/trade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/trades', trade);

module.exports = app;