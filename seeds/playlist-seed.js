const sequelize = require("../config/connection");
const { Playlist } = require("../models");

const playlistData = [{}, {}, {}];

const seedPlaylist = async () => {
  await sequelize.sync({ force: false });
  await Playlist.bulkCreate(playlistData);
};

module.exports = seedPlaylist;
