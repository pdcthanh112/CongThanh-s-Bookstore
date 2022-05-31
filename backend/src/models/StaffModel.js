"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Staff extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Staff.init(
    {
      id: DataTypes.STRING,
      account_id: DataTypes.STRING,
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      date_of_birth: DataTypes.DATE,
      email: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      address: DataTypes.STRING,
      image: DataTypes.STRING,
      salary: DataTypes.INTEGER,
      access_token: DataTypes.STRING,
      created_date: DataTypes.DATE,
      updated_date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Staff",
    }
  );
  return Staff;
};
