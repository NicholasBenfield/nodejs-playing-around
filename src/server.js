// This is setting up the web server with Express, initializing middleware and setting the routes up.
const express = require('express');

const helmet = require('./middleware/helmet');
const middleware = require('./middleware/index');
const bodyParser = require('./middleware/bodyparser');

const runTimeEnviornment = process.env.NODE_ENV;
const PORT = process.env.PORT;

    

if (runTimeEnviornment === 'Development') {

    

    const app = express();

    app.use(helmet);
    app.use(bodyParser);

    // Starts the webserver
    app.listen(PORT, () => {
        console.log(`[${new Date().toLocaleString()}] Express Server has started on the port: ${PORT}`);
    });
} else if (runTimeEnviornment == 'Production') {
    const express = require('express');
    const bodyParser = require('body-parser');
    const helmet = require('helmet');
    //const azure = require('./config/azure.config');

    const app = express();

    app.use(bodyParser.json());

    app.use(bodyParser.urlencoded({ extended: true }));

    // Sets up the security settings for the server
    app.use(helmet());

    const port = 3000;

    // Deals with Securing session cookies, works well for development, but not production
    //const session = require('express-session');

    /*
    app.set('trust proxy', 1) // trust first proxy
    app.use(session({
        secret: 'supersecretpassword',
        name: 'sessionId'
    }));
    */

    // Sets a basic route
    app.get('/', (req, res) => {
        res.send('Hello World!');
    });

    // Starts the webserver
    app.listen(port, () => {
        console.log(`[${new Date().toLocaleString()}] Express Server has started on the port: ${port}`);
    });
}