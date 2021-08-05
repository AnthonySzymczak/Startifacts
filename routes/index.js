
const { model } = require("../config/connection");
//const apiroutes = require ("./api");

const router = require("express").Router();
const categoryRoutes = require('./api/category-routes');
const productRoutes = require('./api/product-routes');
const tagRoutes = require('./api/tag-routes');
const shopRoutes = require('./api/shop-routes');
const userRoutes = require('./api/user-routes')

// router.use('/api', apiroutes);

const landingpages = require('./landingpages')
router.use('/', landingpages);
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);
router.use('/shop', shopRoutes);
router.use('/user', userRoutes);

module.exports = router;
