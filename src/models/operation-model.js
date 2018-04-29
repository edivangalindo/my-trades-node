'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    // ID - Interno do mongoose
    // Status
    // Par
    // Data
    // Montante Crypto
    // Montante Dollar
    // Entrada
    // Alvo
    // Stop
    // Resultado %
    // Retorno Financeiro

    status: {
        type: String,
        required: true,
        trim: true
    },
    pair: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    amountCrypto: {
        type: Number,
        required: true
    },
    amountDollar: {
        type: Number,
        required: true
    },
    entryPoint: {
        type: Number,
        required: true
    },
    target: {
        type: Number,
        required: true
    },
    stop: {
        type: Number,
    },
    result: {
        type: Number
    },
    financialFeedback: {
        type: Number
    }
});

module.exports = mongoose.model('Operation', schema);