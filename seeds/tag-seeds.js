const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'Classic Rock',
  },
  {
    tag_name: 'Progressive Rock',
  },
  {
    tag_name: 'Psychadelic Rock',
  },
  {
    tag_name: 'Hard Rock',
  },
  {
    tag_name: 'Glam Rock',
  },
  {
    tag_name: 'Soft Rock',
  },
  {
    tag_name: 'Modern Rock',
  },
  {
    tag_name: 'Experimental Rock',
  },
  {
    tag_name: 'Indie Rock',
  },
  {
    tag_name: 'Alternative Rock',
  },
  {
    tag_name: 'Funk Rock',
  },
  {
    tag_name: 'Southern Rock',
  },
  {
    tag_name: 'Blues Rock',
  },
  {
    tag_name: 'Folk Rock',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;