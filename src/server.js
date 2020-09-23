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
 const app = require('./app');

// Loading the configurations 

const runTimeEnviornment = process.env.NODE_ENV;
const PORT = process.env.PORT;

if (runTimeEnviornment === 'Development') {
    
    app.get('/', (req,res) => {
        res.json({
            status: "It lives!"
        });
    });

    app.listen(PORT, () => {
        console.log(`[${new Date().toLocaleString()}] Express Server has started on the port: ${PORT}`);
    });
    
}