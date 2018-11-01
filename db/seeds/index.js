const db = require('../index.js');
const productSeed = require('./products.js');
const imageSeed = require('./images.js');

Promise = require('bluebird'); // is this necessary? do we have native access to Promise.each? If not, would we need this in each required module?

db.connection.sync({force:true})
  .then(productSeed)
  .then(imageSeed);
