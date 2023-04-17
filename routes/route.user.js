const router = require('express').Router();
const userConroller = require('../controller/controller.user');
const { sendOTP, verifyOTPMiddleware } = require('../lib/otp');

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

router.get('/otp', async (req, res) => {
  sendOTP(req.body.email, req.body.number);
  res.sendStatus(200);
});

router.post('/register', verifyOTPMiddleware(), async (req, res) => {
  const { user, properties } = req.body;
});

module.exports = router;
