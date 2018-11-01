const db = require('../index.js');
const faker = require('faker');

module.exports = () => Promise.each(new Array(100), (item) => {
  const title = faker.commerce.productName();
  const description = faker.lorem.paragraph();
  db.Product.create({ title, description })
}).then(() => console.log('Products seeded'));
