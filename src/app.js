'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('../config');

const app = express();
const router = express.Router();

mongoose.connect(config.connectionString);

// Rotas
const index = require('./routes/index');
const trade = require('./routes/trade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/trades', trade);

module.exports = app;