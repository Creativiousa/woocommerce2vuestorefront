const appRoot = require('app-root-path');

module.exports = Object.freeze({
  woo: {
    api: {
      host: '167.99.77.138',
      protocol: 'https',
      auth: {
        consumer_key: "ck_398d22a7b22da006219b09f51be3acdb32b1d1fe",
        consumer_secret: "cs_376b25466988a9981e3e30afb5e09ce7204027f6",
        version: "v3"
      }
    }
  },
  db: {
    host: '167.99.77.138',
    port: 9200,
    driver: 'elasticsearch',
    url: process.env.DATABASE_URL || 'http://167.99.77.138:9200',
    indexName:  process.env.INDEX_NAME || 'vue_storefront_catalog'
  },
  winston: {
    file: {
      level: 'info',
      filename: `${appRoot}/logs/app.log`,
      handleExceptions: true,
      json: true,
      maxsize: 5242880,
      maxFiles: 5,
      colorize: false,
    },
    console: {
      level: 'debug',
      handleExceptions: true,
      json: false,
      colorize: true,
    }
  }
})