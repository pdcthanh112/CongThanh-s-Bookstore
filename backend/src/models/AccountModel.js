"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Account.init(
    {
      id: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.INTEGER,
      status: DataTypes.INTEGER,
      created_date: DataTypes.DATE,
      updated_date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Account",
    }
  );
  return Account;
};
