const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const routes = require('./routes/index');

if (process.env.NODE_ENV && process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './frontend/build')));

app.use('/api', routes);

app.listen(process.env.NODE_PORT || 4000, () => {
  // eslint-disable-next-line
  console.log('Server is running on port ', process.env.NODE_PORT || 4000);
});
