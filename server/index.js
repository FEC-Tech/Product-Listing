const express = require('express');
const app = express();
const dbModels = require('../db/models.js');

const port = process.env.PORT || 3001;
const hostname = process.env.HOST || 'localhost';

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

app.listen(port, hostname, () => console.log(`listening on ${hostname}:${port}`));