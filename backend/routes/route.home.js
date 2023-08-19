const express = require('express');
const homeConroller = require('../controller/controller.home');

const router = express.Router({ mergeParams: true });

router.post('/form', async (req, res) => {
  const result = await homeConroller.insertFormData(req.params.form, req.body);
  if (result.success) {
    return res.sendStatus(201);
  }
  return res.status(result.status).send(result.message);
});

module.exports = router;
