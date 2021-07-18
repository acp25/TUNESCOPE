const sequelize = require("../config/connection");
const { Comment } = require("../models");

const commentData = [
    {
        comment_text: 'great album',
        user_id: 1,
        album_id: 1
    },
   
    {
        comment_text: 'honestly, this album let me down in more ways then one.',
        user_id: 2,
        album_id: 1
    },
   
  ];
  
  const seedComments = async () =>  {
    await sequelize.sync({force: false})
    await Comment.bulkCreate(commentData)}
  
   module.exports = seedComments;
  
