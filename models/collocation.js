'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class collocation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.collocation.belongsToMany(models.user, {through: models.userWord})
    }
  };
  collocation.init({
    word: DataTypes.STRING,
    phrase: DataTypes.STRING,
    example: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'collocation',
  });
  return collocation;
};