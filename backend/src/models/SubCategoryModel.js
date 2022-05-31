'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SubCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  SubCategory.init({
    id: DataTypes.STRING,
    sub_category_name: DataTypes.STRING,
    category: DataTypes.STRING,
    status: DataTypes.INTEGER,
    created_date: DataTypes.DATE,
    updated_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'SubCategory',
  });
  return SubCategory;
};