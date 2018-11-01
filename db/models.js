const db = require('./index.js');

const getProducts = () => {
  return db.Product.findAll();
}

const getProduct = (id) => {
  return db.Product.findByPk(id);
}

const addProduct = (title, description) => {
  return db.Product.create({ title, description });
}

exports.getProducts = getProducts;
exports.getProduct = getProduct;
exports.addProduct = addProduct;