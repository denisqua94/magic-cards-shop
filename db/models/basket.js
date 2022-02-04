const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    // static associate({ User, BasketCard, Card }) {
    //   Basket.belongsTo(User, { foreignKey: 'userId' });
    //   Basket.belongsToMany(Card, { through: BasketCard, foreignKey: 'basketId', otherKey: 'cardId' });


    //   // define association here
    // }
  }
  Basket.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Basket',
  });
  return Basket;
};
