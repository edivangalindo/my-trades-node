'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('../config');

const app = express();
const router = express.Router();

mongoose.connect(config.connectionString);

// Models
const Operation = require('./models/operation-model');

// Rotas
const index = require('./routes/index');
const operation = require('./routes/operation');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/trades', operation);

module.exports = app;