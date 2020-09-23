/**
 * Basic structure for how Server.js files are set up
 * - Load dependencies 
 * - Load Instantiations
 * - Load Configurations
 * - Load Middleware
 * - Load Routes
 * - Finally Bootstrapping the server
 * 
 */

// Loading the dependencies 
//const express = require('express');
 const app = require('./app');
 const http = require('http');
// Loading the configurations 

// Loading Middleware
//const helmet = require('./middleware/helmet');
//const middleware = require('./middleware/index');
//const bodyParser = require('./middleware/bodyparser');

const runTimeEnviornment = process.env.NODE_ENV;
const PORT = process.env.PORT;

if (runTimeEnviornment === 'Development') {
    //app.use(helmet);
    //app.use(bodyParser);
    app.set('port', PORT);
    // Starts the webserver
    /*
    app.listen(PORT, () => {
        console.log(`[${new Date().toLocaleString()}] Express Server has started on the port: ${PORT}`);
    });
    */
   const server = http.createServer(app);
}