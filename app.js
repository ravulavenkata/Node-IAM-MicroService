

//Declare required libraries
const express = require('express');
const https= require('https');
const bodyParser= require('body-parser');

//Load Configuration
const configFile= require('./app/configuration/configuration');

//Initialize the app
const app = express();

//Load Security module
const security = require('./app/security/security')(app);

//Load API Routes module
const apiRoutes = require('./app/api/v1/api')(app);


//Check environment variable and based on it start the app on the params for the environment

if(configFile.configuration.app.ENVIRONMENT==='local' ||configFile.configuration.app.ENVIRONMENT==='dev'|| configFile.configuration.app.ENVIRONMENT==='qa')
{
    var server= app.listen(configFile.configuration.app.SERVER_PORT_NUMBER,function(){
        console.log('You are in Local / Development/ QA Environment');

    });
}

if(configFile.configuration.app.ENVIRONMENT==='production'|| configFile.configuration.app.ENVIRONMENT==='staging')
{
    var server= app.listen(configFile.configuration.app.SERVER_PORT_NUMBER,function(){
        console.log('You are in Production / Staging Environment');

    });
}