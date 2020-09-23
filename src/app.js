const express = require('express');

var home = require('./components/home/home.view');

const app = express();

app.use('/', home);

module.exports = app;