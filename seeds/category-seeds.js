const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;

const { Category } = require('../models');

const categoryData = [
    {
        category_name: 'Star Trek TOS',
    },
    {
        category_name: 'Star Wars',
    },
    {
        category_name: 'Battlestar Galactica',
    },
    {
        category_name: 'Anime',
    },
    {
        category_name: 'Harry Potter',
    },
    {
        category_name: 'Star Trek Other',
    },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;