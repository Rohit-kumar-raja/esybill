const express = require('express');

const router = express.Router();
const userRoute = require('./route.user');
const propertyRoute = require('./route.property');
const itemCategoryRoute = require('./route.itemCategory');
const itemRoute = require('./route.item');
const productRoute = require('./route.product');

router.use('/user', userRoute);
router.use('/property/:prodId/itemCtegory/:catId/item/itemId', productRoute);
router.use('/property/:prodId/itemCtegory/:catId/item', itemRoute);
router.use('/property/:prodId/itemCtegory', itemCategoryRoute);
router.use('/property', propertyRoute);

module.exports = router;
