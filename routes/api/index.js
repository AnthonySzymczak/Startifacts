const router = require('express').Router();

const categoryRoutes = require('./category-routes')
const productRoutes = require('./product-routes')
const shopRoutes = require('./shop-routes')
const tagRoutes = require('./tag-routes')
const userRoutes = require('./user-routes')

router.use('/categories', categoryRoutes)
router.use('/product', productRoutes)
router.use('/shop', shopRoutes)
router.use('/tags', tagRoutes)
router.use('/user', userRoutes)

module.exports = router;