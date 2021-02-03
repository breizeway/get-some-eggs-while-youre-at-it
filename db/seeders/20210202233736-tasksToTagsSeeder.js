'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TaskToTags', [
      { taskId: 1, tagId: 1, createdAt: new Date(), updatedAt: new Date() },
      { taskId: 1, tagId: 2, createdAt: new Date(), updatedAt: new Date() },
      { taskId: 1, tagId: 3, createdAt: new Date(), updatedAt: new Date() },
      { taskId: 4, tagId: 4, createdAt: new Date(), updatedAt: new Date() },
      { taskId: 5, tagId: 5, createdAt: new Date(), updatedAt: new Date() },
      { taskId: 6, tagId: 6, createdAt: new Date(), updatedAt: new Date() },
      { taskId: 7, tagId: 7, createdAt: new Date(), updatedAt: new Date() },
      { taskId: 11, tagId: 8, createdAt: new Date(), updatedAt: new Date() },
      { taskId: 15, tagId: 9, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TaskToTags', null, {});
  }
};
