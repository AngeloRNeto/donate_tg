'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Carrega as rotas  
const indexRoute = require('./routes/index-route');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


app.use('/', indexRoute);

module.exports = app;