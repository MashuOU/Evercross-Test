'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Movie.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: `title is required` },
        notEmpty: { msg: `title is required` },
      }
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: `imgUrl is required` },
        notEmpty: { msg: `imgUrl is required` },
      }
    },
    year: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: `year is required` },
        notEmpty: { msg: `year is required` },
      }
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: `rating is required` },
        notEmpty: { msg: `rating is required` },
      }
    }
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};