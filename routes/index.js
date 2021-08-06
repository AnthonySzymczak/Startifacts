
// const { model } = require("../config/connection");
// //const apiroutes = require ("./api");

// const productRoutes = require('./api/product-routes');
// const tagRoutes = require('./api/tag-routes');
// const shopRoutes = require('./api/shop-routes');
// const userRoutes = require('./api/user-routes')

// // router.use('/api', apiroutes);

// router.use('/', landingpages);
// router.use('/categories', categoryRoutes);
// router.use('/products', productRoutes);
// router.use('/tags', tagRoutes);
// router.use('/shop', shopRoutes);
// router.use('/user', userRoutes);


const router = require("express").Router();

const apiRoutes = require('./api');
const loginRoutes = require('./login-routes')
const signupRoutes = require('./signup-routes')
const shopRoutes = require('./shop-routes')
const indexRoutes = require('./index-routes')


router.use('/api', apiRoutes);
router.use('/signup', signupRoutes) 
router.use('/login', loginRoutes) 
router.use('/shop', shopRoutes)
router.use('/', indexRoutes);

module.exports = router;