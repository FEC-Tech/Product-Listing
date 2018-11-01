const express = require('express');
const app = express();
const dbModels = require('../db/models.js');

const morgan = require('morgan');
// const bodyparser = require('body-parser');

app.use(morgan('dev'));
// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/../dist`));

app.get('/api/products', (req, res) => {
  return dbModels.getProducts()
    .then((products) => {
      res.send(products);
    });
})

module.exports = app;