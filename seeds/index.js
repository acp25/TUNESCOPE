const sequelize = require("../config/connection");
const seedAlbums = require('./album-seeds');
const seedGenres = require('./genre-seeds');
const seedUsers = require('./user-seeds');
const seedComments = require('./comment-seed');

const seedAll = async () => {
    await sequelize.sync({force: true})
    console.log("\n------------DATABASE SYNCED---------------\n");
    await seedUsers();
    console.log("\n------------User SYNCED---------------\n");
    await seedGenres();
    console.log("\n-------------GENRES SEEDED-------------\n");
    await seedAlbums();
    console.log("\n-------------ALBUMS SEEDED-------------\n");
    await seedComments();
    console.log("\n-------------Comments SEEDED-------------\n");

    process.exit(0);
}

seedAll();