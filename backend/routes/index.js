const express = require('express');

const router = express.Router({ mergeParams: true });
const userRoute = require('./route.user');
const propertyRoute = require('./route.property');
const itemCategoryRoute = require('./route.itemCategory');
const itemRoute = require('./route.item');
const productRoute = require('./route.product');
const menuRoute = require('./route.menu');

router.use('/user', userRoute);
router.use('/property/:PropertyNo/itemCtegory/:CategoryRN/item/:ItemNameRN/product', productRoute);
router.use('/property/:PropertyNo/itemCtegory/:CategoryRN/item', itemRoute);
router.use('/property/:PropertyNo/itemCtegory', itemCategoryRoute);
router.use('/property/:PropertyNo/menu', menuRoute);
router.use('/property', propertyRoute);

module.exports = router;
