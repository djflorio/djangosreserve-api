const express = require('express');
const bodyParser = require('body-parser');

const about = require('./routes/about.route');

const app = express();

app.use('/about', about);

let port = 8080;
app.listen(port, () => {
  console.log('Server is up and running on port number ' + port);
});