const sequelize = require("../config/connection");
const { Album } = require("../models");
const albumData = require("./albumdata.json");

// <<<<<<< routes
// const seedAlbums = async () => {
//   await sequelize.sync({ force: true });
//   const albums = await Album.bulkCreate(albumData, {
//     individualHooks: true,
//     returning: true,
//   });
//   process.exit(0);
// };

// seedAlbums();

const seedAlbums = async () => {
  await sequelize.sync({ force: false });
  await Album.bulkCreate(albumData);
};

module.exports = seedAlbums;
// >>>>>>> main
