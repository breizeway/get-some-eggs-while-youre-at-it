'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TaskToTags', [
      { task_id: 1, tag_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { task_id: 1, tag_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { task_id: 1, tag_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { task_id: 2, tag_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { task_id: 2, tag_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { task_id: 2, tag_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { task_id: 3, tag_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { task_id: 4, tag_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { task_id: 5, tag_id: 1, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TaskToTags', null, {});
  }
};
