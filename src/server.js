// This is setting up the web server with Express, initializing middleware and setting the routes up.
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

app.get('/', (req,res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Express listening on ${port}`);
});