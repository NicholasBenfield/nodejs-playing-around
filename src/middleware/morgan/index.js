var express = require('express');
var morgan = require('morgan');

var app = express();

app.use(morgan("common"));

module.exports = app;