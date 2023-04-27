const express = require('express');

const router = express.Router();
const { verifyTokenMiddleware } = require('../lib/token');
const propertyController = require('../controller/controller.porperty');

router.use(verifyTokenMiddleware);

router.get('/', async (req, res) => {
  const result = await propertyController.getAllProperties(req.user.CustomerNo);
  if (result.success) {
    return res.json(result.properties);
  }
  return res.status(result.status).json(result.message);
});

router.post('/', async (req, res) => {
  const result = await propertyController.createProperty(req.body, req.user.CustomerNo);
  if (result.success) {
    return res.sendStatus(201);
  }
  return res.status(result.status).json(result.message);
});

module.exports = router;
