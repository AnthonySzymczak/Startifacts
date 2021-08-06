const router = require('express').Router();
const { Product, Category, Tag, ProductTag} = require('../../models');

//get shop cards
router.get('/', (req, res) => {
    Product.findAll({
        attributes: ['id','product_image', 'product_name', 'price', 'stock', 'category_id'],
        include: [{
          model: Category,
          attributes: ['id', 'category_name']
        },
        {
          model: Tag,
          through: ProductTag,
          as: 'product_tag'
        },
        ],
      })
    .then(dbProducts => {
      const products = dbProducts.map(product => product.get({ plain: true }));
    
      res.render('shop', { products });
    });
  });

module.exports = router;
  