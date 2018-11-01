const express = require('express');
const morgan = require('morgan');
// const bodyparser = require('body-parser');
const dbModels = require('../db/models.js');
const app = express();

/* **** CODE TO RESOLVE TESTING BUG WITH MYSQL - DO NOT MOVE OR CHANGE **** */
// relevant StackOverflow: https://stackoverflow.com/questions/46227783/encoding-not-recognized-in-jest-js

const iconv = require('iconv-lite'); // eslint-disable-line import/no-extraneous-dependencies
const encodings = require('iconv-lite/encodings'); // eslint-disable-line import/no-extraneous-dependencies

iconv.encodings = encodings;
/* **** END CODE TO DEBUG MYSQL + TEST **** */

app.use(morgan('dev'));
// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/../dist`));

app.get('/api/products', (req, res) => {
  return dbModels.getProducts()
    .then((products) => {
      return res.status(200).send(products);
    });
})

app.get('/api/products/:productId', (req, res) => {
  return dbModels.getProduct(req.params.productId)
    .then((product) => {
      return res.status(200).send(product.dataValues);
    });
})


app.post('/api/products', (req, res) => {
  // console.log('incoming req.query is', req.query, 'incoming req.body is', req.body);
  const { title, description } = req.query;
  return dbModels.addProduct(title, description)
    .then((entry) => res.status(201).send(entry));
})

module.exports = app;