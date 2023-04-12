const router = require('express').Router();
const userRoute = require('./route.user');

router.use('/user', userRoute);

module.exports = router;
