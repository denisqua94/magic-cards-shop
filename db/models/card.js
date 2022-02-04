const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate({ Basket, BasketCard, User }) {
      // Card.belongsTo(Basket);
      Card.belongsTo(User, { foreignKey: 'userId' });
      // Card.belongsToMany(Basket, { through: BasketCard, foreignKey: 'cardId', otherKey: 'basketId' });
    }
  }
  Card.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    condition: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    cardsName: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    img: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    price: {
      allowNull: false,
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
    modelName: 'Card',
  });
  return Card;
};
