const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class comment extends Model {}

comment.init({

    id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey:true,
    autoIncrement: true
    },
    text: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
        model: 'post',
        key: 'id'
        }
    },
    sequelize,
    tableName: 'comments',
    modelName: 'comment',
    timestamps: true

});
module.exports = comment;