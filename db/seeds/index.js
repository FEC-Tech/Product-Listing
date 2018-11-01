Promise = require('bluebird');
const db = require('../index.js');
const productSeed = require('./products.js');
const imageSeed = require('./images.js');


const seedAll = () => db.connection.sync({force:true})

seedAll()
  .then(productSeed)
  .then(imageSeed);

module.exports = seedAll;