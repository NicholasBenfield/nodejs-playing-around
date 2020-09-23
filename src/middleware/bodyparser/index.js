const express = require('express');
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

module.exports = app;