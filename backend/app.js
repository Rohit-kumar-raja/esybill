const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
require('dotenv').config();
const path = require('path');
const routes = require('./routes/index');

const app = express();
if (process.env.NODE_ENV.toString().toLowerCase() !== 'production') {
  app.use(cors());
}
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.listen(process.env.NODE_PORT || 4000, () => {
  // eslint-disable-next-line
  console.log('Server is running on port ', process.env.NODE_PORT || 4000);
});
app.use('/api', routes);

app.use(express.static(path.join(__dirname, '/frontend/build')));
app.use('/assets', express.static(path.join(__dirname, '/assets')));
