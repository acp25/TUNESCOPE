// import important parts of sequelize library
const { Model, DataTypes,  } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
// Initialize Product model (table) by extending off Sequelize's Model class
class Comment extends Model { }
// set up fields and rules for Comment model
Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        comment_text: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [3]
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
           album_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Album',
                key: 'id'
            }
           },


        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'post',
                key: 'id'
            },
            onDelete: 'cascade'
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }
);

module.exports = Comment;
