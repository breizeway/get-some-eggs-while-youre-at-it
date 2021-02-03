'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Lists', [
      { name: 'Inbox', userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Work', userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Personal', userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Inbox', userId: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Work', userId: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Personal', userId: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Inbox', userId: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Work', userId: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Personal', userId: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Inbox', userId: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Work', userId: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Personal', userId: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Inbox', userId: 5, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Work', userId: 5, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Personal', userId: 5, createdAt: new Date(), updatedAt: new Date() },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Lists', null, {});
  }
};
