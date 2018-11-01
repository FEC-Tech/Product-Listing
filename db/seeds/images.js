const db = require('../index.js');
const faker = require('faker');

module.exports = () => Promise.each(new Array(100), (item) => {
  const imageUrl = faker.image.imageUrl();
  db.Image.create({ imageUrl })
}).then(() => console.log('Images seeded'));