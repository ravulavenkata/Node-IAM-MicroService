var mysql      = require('mysql');
const configFile= require('../../configuration/configuration');

var connection = mysql.createConnection({
  host     : configFile.configuration.database.DATABASE_HOST,
  user     : configFile.configuration.database.DATABASE_USERNAME,
  password : configFile.configuration.database.DATABASE_PASSWORD,
  database : configFile.configuration.database.DATABASE_NAME
});


connection.connect(function(err) {
    if (err) {
      console.error('MySQL Connection Connect: ' + err.stack);
      return;
    }
  
    console.log('MySQL Connection Connected with id ' + connection.threadId);
  });


  connection.destroy(function(err) {
    // The connection is terminated now
    if (err) {
        console.error('MySQL Connection is Unable to Destroy ' + err.stack);
        return;
      }
    
      console.log('MySQL Connection Is Destroyed ');
  });