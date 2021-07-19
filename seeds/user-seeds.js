const sequelize = require("../config/connection");
const { User } = require("../models");

const userData = [
  {
    username: "panda2",
    password: "orange21",
    email: "panda2@gmail.com",
  },
  {
    username: "panda3",
    password: "orange22",
    email: "panda3@gmail.com",
  },
  {
    username: "panda4",
    password: "orange23",
    email: "panda4@gmail.com",
  },
];

const seedUsers = async () => {
  await sequelize.sync({ force: false });
  await User.bulkCreate(userData);
};

module.exports = seedUsers;
