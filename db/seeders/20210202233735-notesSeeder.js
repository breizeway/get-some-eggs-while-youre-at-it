'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Notes', [
      { note: 'This is a note here.', taskId: 1, userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { note: 'This is a note here.', taskId: 4, userId: 2, createdAt: new Date(), updatedAt: new Date() },
      { note: 'This is a note here.', taskId: 7, userId: 3, createdAt: new Date(), updatedAt: new Date() },
      { note: 'This is a note here.', taskId: 11, userId: 4, createdAt: new Date(), updatedAt: new Date() },
      { note: 'This is a note here.', taskId: 15, userId: 5, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Notes', null, {});
  }
};
