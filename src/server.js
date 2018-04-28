'use strict'

const http = require('http');
const debug = require('debug')('mytrades:server');
const express = require('express');

const app = express();
const port = normalizePort(process.env.PORT || '3000');

app.set('port', port);

const server = http.createServer(app);
const router = express.Router();

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: 'My Trades Api',
        version: '0.0.1'
    });
});

app.use('/', route);
console.log('Api rodando na porta: ' + port);

function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}