'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

     await queryInterface.bulkInsert('users', [
       {
        uuid: "3e90c48c-cb93-4c4f-8a2a-32e23d708478",
        name: "Jane doe",
        email: "jane@abc.com",
        roll: "admin",
        createdAt: "2021-03-17T11:49:20.000Z",
        updatedAt: "2021-03-17T11:49:20.000Z"
      },
      {
        uuid: "3e90c48c-cb93-4c4f-8a2a-32e23d7asd78",
        name: "John doe",
        email: "john@abc.com",
        roll: "admin",
        createdAt: "2021-03-17T11:49:20.000Z",
        updatedAt: "2021-03-17T11:49:20.000Z"
      },
    
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('users', null, {});
  }
};
