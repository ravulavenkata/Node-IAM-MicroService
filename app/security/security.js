const helmet = require('helmet');
const csurf= require('csurf');
const cors = require('cors');

module.exports = async function (app){

// Sets "X-Frame-Options: SAME ORIGIN".
app.use(helmet.frameguard({ action: 'sameorigin' }))

// Sets "X-XSS-Protection: 1; mode=block".
app.use(helmet.xssFilter())


app.use(helmet.hidePoweredBy())

app.use(helmet.permittedCrossDomainPolicies())

// Sets "X-DNS-Prefetch-Control: off".
app.use(helmet.dnsPrefetchControl())


  app.use(helmet.noCache())


// Sets "X-Download-Options: noopen".
app.use(helmet.ieNoOpen())



}

