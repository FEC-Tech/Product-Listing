const db = require('../index.js');
const faker = require('faker');

module.exports = () => Promise.each(new Array(100), () => {
  const item = {}
  item.imageUrl1 = faker.image.imageUrl();
  item.imageUrl2 = faker.image.imageUrl();
  item.imageUrl3 = faker.image.imageUrl();
  item.imageUrl4 = faker.image.imageUrl();
  item.productId = Math.ceil(Math.random() * 100);
  return db.Image.create(item)
}).then(() => console.log('Images seeded'));