const express = require('express');

const router = express.Router({ mergeParams: true });
const { verifyTokenMiddleware } = require('../lib/token');

const imageMenuController = require('../controller/controller.imageMenu');

router.use(verifyTokenMiddleware);

module.exports = router;
