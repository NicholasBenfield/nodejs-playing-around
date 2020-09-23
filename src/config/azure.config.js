/*
    This file is what grabs the Azure Environement variables
*/
 const environment = process.env.NODE_ENV;
    if(environment == 'Production'){
        console.log(`Node is running in production`);
    } else {
        console.log(`[${new Date().toLocaleString()}] Node is not running in production`);
    }
