'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Notes', [
      { note: 'This is a note here.', task_id: 1, user_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { note: 'This is a note here.', task_id: 4, user_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { note: 'This is a note here.', task_id: 7, user_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { note: 'This is a note here.', task_id: 11, user_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { note: 'This is a note here.', task_id: 15, user_id: 5, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Notes', null, {});
  }
};
