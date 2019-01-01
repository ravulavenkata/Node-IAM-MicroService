

const configuration ={
  app:{
    ENVIRONMENT: process.env.ENVIRONMENT,
    SERVER_PORT_NUMBER: process.env.SERVER_PORT_NUMBER
  },
  database:{
    DATABASE_HOST: process.env.DATABASE_HOST,
    DATABASE_NAME: process.env.DATABASE_NAME,
    DATABASE_USERNAME: process.env.DATABASE_USERNAME,
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,

    DATABASE_PORT_NUMBER: process.env.DATABASE_PORT_NUMBER
  }
}


module.exports.configuration=configuration;