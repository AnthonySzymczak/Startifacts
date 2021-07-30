const { Tag } = require('../models');

const tagData = [
    {
        tag_name: 'models/collectibles',
    },
    {
        tag_name: 'props',
    },
    {
        tag_name: 'costumes',
    },
    {
        tag_name: 'books',
    },
    {
        tag_name: 'casual wear',
    },
    {
        tag_name: 'signed items',
    },
    {
        tag_name: 'jewelry',
    },
    {
        tag_name: 'drinkware',
    },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;