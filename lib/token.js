const jwt = require('jsonwebtoken');

const { PRIVATE_KEY } = process.env;

async function getToken(data, expiresIn = '6h') {
  try {
    return jwt.sign(data, PRIVATE_KEY, { expiresIn });
  }
  catch (err) {
    return false;
  }
}

async function verifyTokenMiddleware(req, res, next) {
  try {
    const token = req.headers['X-AUTH-TOKEN'];
    const data = jwt.verify(token, PRIVATE_KEY);
    req.user = data;
    next();
  }
  catch (err) {
    if (err.name === 'TokenExpiredError') {
      res.status(401).send({ message: 'Token Expired', code: 'NOT_LOGGED_IN' });
    }
    else if (err.name === 'JsonWebTokenError') {
      res.status(401).send({ message: 'Invalid Token', code: 'NOT_LOGGED_IN' });
    }
    else {
      res.sendStatus(500);
    }
  }
}

module.exports = {
  getToken,
  verifyTokenMiddleware
};
