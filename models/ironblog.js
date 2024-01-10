const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class IronBlog extends Model {}

IronBlog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
  },
);

module.exports = IronBlog;
