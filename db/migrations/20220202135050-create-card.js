module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      cardsName: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      img: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      condition: {
        allowNull: false,
        type: Sequelize.TEXT,
      },

      price: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },

      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Cards');
  },
};
