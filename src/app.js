// Load up the Express framework
const express = require('express');

// Load up the middleware for Express
const bodyParser = require('./middleware/bodyparser');
const helmet = require('./middleware/helmet');
const cors = require('./middleware/cors');
const morgan = require('./middleware/morgan');
const compression = require('./middleware/compression');

var home = require('./components/home/home.view');

const app = express();

app.use(bodyParser);
app.use(helmet);
app.use(cors);
app.use(morgan);

app.use('/', home);

module.exports = app;