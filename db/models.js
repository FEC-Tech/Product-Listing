const db = require('./index.js');

const getProducts = () => {
  return db.Products.findAll();
}

exports.getProducts = getProducts;