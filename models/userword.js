'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userWord extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  userWord.init({
    userId: DataTypes.INTEGER,
    collocationId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'userWord',
  });
  return userWord;
};