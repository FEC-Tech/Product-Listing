const Sequelize = require('sequelize');


// declare connection
const orm = new Sequelize('FECProducts', 'root', '', {
  host: 'localhost',
  logging: false,
  dialect: 'mysql'
});

// authenticate connection
orm
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// make tables
const Product = orm.define('product', {
  title: Sequelize.STRING,
  description: Sequelize.TEXT,
})

const Image = orm.define('image', {
  imageUrl1: Sequelize.STRING,
  imageUrl2: Sequelize.STRING,
  imageUrl3: Sequelize.STRING,
  imageUrl4: Sequelize.STRING,
})

// set up relationships
Image.belongsTo(Product)

// export
exports.Product = Product;
exports.Image = Image;
exports.connection = orm;