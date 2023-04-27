const jwt = require('jsonwebtoken');

const { JWT_PRIVATE_KEY } = process.env;

async function getToken(data, expiresIn = '6h') {
  try {
    return jwt.sign(data, JWT_PRIVATE_KEY, { expiresIn });
  }
  catch (err) {
    // eslint-disable-next-line
    console.log(err);
    return false;
  }
}

async function verifyTokenMiddleware(req, res, next) {
  try {
    const token = req.headers.Authorization.substring(7, req.headers.Authorization.length);
    const data = jwt.verify(token, JWT_PRIVATE_KEY);
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
      // eslint-disable-next-line
      console.log(err);
      res.sendStatus(500);
    }
  }
}

module.exports = {
  getToken,
  verifyTokenMiddleware
};
