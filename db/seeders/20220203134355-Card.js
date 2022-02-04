module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cards', [{
      cardsName: 'Карточка 1',
      img: 'qwe',
      price: 1000,
      userId: 1,
      condition: 'good',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      cardsName: 'Карточка 2',
      img: 'qwe',
      price: 1000,
      userId: 2,
      condition: 'bad',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cards', [{ userId: 1 }]);
  },
};
