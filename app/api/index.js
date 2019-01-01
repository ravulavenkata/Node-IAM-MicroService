

//Load required version modules
const operations= require('../../core/core');

//Set Routes for the API Service
module.exports = async function(app){

            //GET REQUESTS
            //Test API Service health
            app.get('/healthcheck',function(request,response){

                try{
                    response.status(200).send('Service is Healthy');
                }
                catch(exception){
                    console.log('Exception Occured in health check, ', exception);
                }
            });

}