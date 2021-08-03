const { model } = require("../config/connection");
const apiroutes = require ("./api");

const router = require("express").Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

// router.use('/api', apiroutes);

const landingpages = require('./landingpages')
router.use('/', landingpages);
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router;