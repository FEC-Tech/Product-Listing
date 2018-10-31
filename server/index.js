const express = require('express');
const app = express();

const port = process.env.PORT || 3001;
const host = process.env.HOST || 'localhost';

const morgan = require('morgan');

app.use(morgan('development'));
app.use(express.static(`${__dirname}/../dist`));

app.listen(port, host, () => console.log(`listening on ${host}:${port}`));