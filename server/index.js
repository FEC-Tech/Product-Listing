const express = require('express');
const app = express();
const dbModels = require('../db/models.js');

const port = process.env.PORT || 3001;
const host = process.env.HOST || 'localhost';

const morgan = require('morgan');
const bodyparser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyparser);
app.use(express.static(`${__dirname}/../dist`));

app.get('/api/products', (req, res) => {
  return dbModels.getProducts()
    .then(res.json);
})

app.listen(port, host, () => console.log(`listening on ${host}:${port}`));