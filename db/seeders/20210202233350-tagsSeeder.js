'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tags', [
      { name: 'red', userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'orange', userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'yellow', userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'green', userId: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'blue', userId: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'violet', userId: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'ultra violet', userId: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: 'infra red', userId: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'indigo', userId: 5, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Tags', null, {});
  }
};
