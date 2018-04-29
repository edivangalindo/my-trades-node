'use strict';

const mongoose = require('mongoose');
const Operation = mongoose.model('Operation');

exports.get = (req, res, next) => {
    Operation.find({})
    .then(data => {
        res.status(201).send(data);
     })
    .catch(e => {
        res.status(400).send(e);
    });
};

exports.getById = (req, res, next) => {
    Operation.findById(req.params.id)
    .then(data => {
        res.status(201).send(data);
     })
    .catch(e => {
        res.status(400).send(e);
    });
};

exports.getByStatus = (req, res, next) => {
    Operation.find({
        status: req.params.status
    })
    .then(data => {
        res.status(201).send(data);
     })
    .catch(e => {
        res.status(400).send(e);
    });
};

exports.post = ('/', (req, res, next) => {
    let operation = new Operation(req.body);

    operation
        .save()
        .then(x => {
            res.status(201).send({
                message: 'Operação salva com sucesso!'
            });
         })
        .catch(e => {
            res.status(400).send({
                message: 'Falha ao salvar a operação',
                data: e
            });
        });
});

exports.put = ('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        id: id,
        item: req.body
    });
});

exports.delete = ('/', (req, res, next) => {
    res.status(200).send(req.body);
});