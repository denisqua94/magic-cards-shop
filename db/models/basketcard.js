const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class BasketCard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //   // define association here
    // }
  }
  BasketCard.init({
    basketId: DataTypes.INTEGER,
    cardId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'BasketCard',
  });
  return BasketCard;
};
