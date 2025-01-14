const express = require('express');
var cors = require('cors');
require('dotenv').config();
const path = require('path');
const routes = require('./routes/index');

const app = express();
app.use(cors());
// if (process.env.NODE_ENV !== 'production') {

// }
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(process.env.NODE_PORT || 4000, () => {
  // eslint-disable-next-line
  console.log('Server is running on port ', process.env.NODE_PORT || 4000);
});
app.use('/api', routes);

app.use('/assets', express.static(path.join(__dirname, 'public')));
