const express = require('express');
const compression = require('compression');

var app = express();

app.use(compression());

module.exports = app;