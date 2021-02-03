'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Lists', [
      { name: 'Inbox', user_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Work', user_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Personal', user_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Inbox', user_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Work', user_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Personal', user_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Inbox', user_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Work', user_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Personal', user_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Inbox', user_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Work', user_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Personal', user_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Inbox', user_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Work', user_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Personal', user_id: 5, createdAt: new Date(), updatedAt: new Date() },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Lists', null, {});
  }
};
