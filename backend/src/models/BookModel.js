'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Book.init({
    id: DataTypes.STRING,
    book_name: DataTypes.STRING,
    category: DataTypes.STRING,  
    sub_catetory: DataTypes.STRING,
    author: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    series: DataTypes.STRING,
    publisher: DataTypes.STRING,
    country: DataTypes.STRING,
    sold: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    image: DataTypes.STRING,
    status: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    created_date: DataTypes.DATE,
    updated_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};