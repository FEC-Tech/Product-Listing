const app = require('./server.js')

const port = process.env.PORT || 3001;
const hostname = process.env.HOST || 'localhost';

app.listen(port, hostname, () => console.log(`listening on ${hostname}:${port}`));