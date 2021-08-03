const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

//GET Routes for Category.//

router.get('/', (req, res) => {
  Category.findAll({
    attributes: ['id', 'category_name'],
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      },
    ],
  })
    .then((dbCategoryData) => res.json(dbCategoryData))
});

router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
      },
    ]
  })
    .then((dbCategoryData) => {
      res.json(dbCategoryData);
    });
  });
  // POST, PUT, and DELETE routes to create, update, or delete categories.//
  router.post('/', (req, res) => {
    Category.create({
      category_name: req.body.category_name,
    })
      .then((dbProductData) =>
        res.json(dbProductData))
  });

  router.put('/:id', (req, res) => {
    Category.update({
      category_name: req.body.category_name,
    },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then((dbCategoryData) => {
        res.json(dbCategoryData);
      });
    });
    router.delete('/:id', (req, res) => {
      Category.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(dbCategoryData => {
          res.json(dbCategoryData);
        });
      });
  
      module.exports = router;