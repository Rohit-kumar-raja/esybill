const express = require('express');

const router = express.Router();
const { verifyTokenMiddleware } = require('../lib/token');

router.use(verifyTokenMiddleware);

module.exports = router;
