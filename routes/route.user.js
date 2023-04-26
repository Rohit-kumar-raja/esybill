const express = require('express');

const router = express.Router();
const userConroller = require('../controller/controller.user');
const { verifyOTPMiddleware } = require('../lib/otp');

router.get('/me', async (req, res) => {
  const { phone } = req.user;
  const result = await userConroller.getUserByPhone(phone);
  if (result.success) {
    res.json(result.data);
  }
  else {
    res.status(result.status).send(result.message);
  }
});

router.post('/otp', async (req, res) => {
  if (req.body.type === 'login') {
    const result = await userConroller.sendLoginOtp(req.body.number);
    if (result.success) {
      res.sendStatus(200);
    }
    else {
      res.status(result.status).send(result.message);
    }
  }
  else if (req.body.type === 'verify') {
    const result = await userConroller.sendVerifyOtp(req.body.email, req.body.number);
    if (result.success) {
      res.sendStatus(200);
    }
    else {
      res.status(result.status).send(result.message);
    }
  }
  else {
    res.sendStatus(400);
  }
});

router.post('/register', verifyOTPMiddleware, async (req, res) => {
  const { user, properties } = req.body;
  const result = await userConroller.register(user, properties);
  if (result.success) {
    return res.sendStatus(200);
  }
  return res.status(result.status).json(result.message);
});

module.exports = router;
