module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      name: 'Pleg',
      email: 'qwe@qwe.qwe',
      password: '123',
      city: 'SPB',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'qwewqe',
      email: 'w@w',
      password: '123',
      city: 'MSK',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },
  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
