const express = require('express');

var router = express.Router();

router.get('/', (req,res,next) => {
    res.end('Welcome to the home page');
});

module.exports = router;