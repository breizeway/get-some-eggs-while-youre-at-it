'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tags', [
      { name: 'red', user_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'orange', user_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'yellow', user_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'green', user_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'blue', user_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'violet', user_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'ultra violet', user_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: 'infra red', user_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'indigo', user_id: 5, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Tags', null, {});
  }
};
