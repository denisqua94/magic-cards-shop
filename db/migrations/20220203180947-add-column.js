module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Baskets', 'cardId', Sequelize.INTEGER, {
      references: {
        model: 'Cards',
        key: 'id',
      },
    });
    await queryInterface.dropTable('BasketCards');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Baskets', 'cardId');
  },
};
