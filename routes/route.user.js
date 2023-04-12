const router = require('express').Router();
const userConroller = require('../controller/controller.user');

router.get('/', async (req, res) => {
  const result = await userConroller.getUser();
  if (result.success) {
    res.json(result.data);
  }
  else {
    res.status(result.status).send(result.message);
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const result = await userConroller.getUserById(id);
  if (result.success) {
    res.json(result.data);
  }
  else {
    res.status(result.status).send(result.message);
  }
});

module.exports = router;
