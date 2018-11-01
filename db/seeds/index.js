const db = require('../index.js');
const productSeed = require('./products.js');
const imageSeed = require('./images.js');

Promise = require('bluebird'); // is this necessary? give access to Promise.each?

db.connection.sync({force:true})
  .then(productSeed)
  .then(imageSeed);
