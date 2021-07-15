// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Album extends Model {}

// set up fields and rules for Product model
Album.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    album_name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    artist_name: {
        type: DataTypes.STRING,
        allowNull: false
      },

    released: {
        type: DataTypes.STRING,
        allowNull: false
      },

    label: {
        type: DataTypes.STRING,
        allowNull: false
      },

    length: {
        type: DataTypes.STRING,
        allowNull: false
      },

    cover: {
        type: DataTypes.STRING,
        allowNull: false
      },

    amazon_image_link: {
        type: DataTypes.STRING,
        allowNull: false
      },

    amazon_link: {
        type: DataTypes.STRING,
        allowNull: false
      },

    spotify_embed: {
        type: DataTypes.STRING,
        allowNull: false
      },

    genre_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Genre',
        key: 'id',
        unique: false
      }
    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Album',
  }
);

module.exports = Album;