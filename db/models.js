const db = require('./index.js');

const getProducts = () => {
  return db.Product.findAll();
}

exports.getProducts = getProducts;