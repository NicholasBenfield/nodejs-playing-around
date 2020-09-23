var express = require('express');
var cors = require('cors');

const app = express();

app.use(cors({
    origin: ["http://localhost:3001"],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

module.exports = app;