const express = require('express');
const dotenv = require('dotenv');

if (process.env.NODE_ENV && process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const app = express();
app.use(express.json());
app.get('/api/', (req, res) => {
  res.send('Hello World');
});
app.listen(process.env.NODE_PORT || 4000, () => {
  // eslint-disable-next-line
  console.log('Server is running on port ', process.env.NODE_PORT || 4000);
});
