const { Genre } = require('../models');

const genreData = [
  {
    genre_name: 'Rock',
  },
  {
    genre_name: 'Metal',
  },
  {
    genre_name: 'Pop',
  },
  {
    genre_name: 'Electronic',
  },
  {
    genre_name: 'R&B/Blues',
  },
  {
    genre_name: 'Jazz',
  },
  {
    genre_name: 'Classical',
  },
  {
    genre_name: 'Country',
  },
  {
    genre_name: 'Rap/Hip-Hop',
  },
];

const seedgenres = () => genre.bulkCreate(genreData);

module.exports = seedgenres;