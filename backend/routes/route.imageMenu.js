const express = require('express');

const router = express.Router({ mergeParams: true });
const { verifyTokenMiddleware } = require('../lib/token');

const imageMenuController = require('../controller/controller.imageMenu');

router.use(verifyTokenMiddleware);

router.get('/', async (req, res) => {
  const result = await imageMenuController.getImageMenu(req.params.PropertyNo);
  if (result.success) {
    return res.json(result.imageMenu);
  }
  return res.status(result.status).json(result.message);
});

router.delete('/', async (req, res) => {
  const result = await imageMenuController.getImageMenu(req.params.PropertyNo);
  if (result.success) {
    return res.json(result.imageMenu);
  }
  return res.status(result.status).json(result.message);
});

router.post('/', async (req, res) => {
  const result = await imageMenuController.getImageMenu(req.params.PropertyNo);
  if (result.success) {
    return res.json(result.imageMenu);
  }
  return res.status(result.status).json(result.message);
});

router.put('/', async (req, res) => {
  const result = await imageMenuController.getImageMenu(req.params.PropertyNo);
  if (result.success) {
    return res.json(result.imageMenu);
  }
  return res.status(result.status).json(result.message);
});

module.exports = router;
