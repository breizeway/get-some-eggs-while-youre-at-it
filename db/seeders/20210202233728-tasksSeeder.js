'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tasks', [
      { name: 'get eggs', startDate: '2021-02-02', dueDate: '2021-02-03', priority: 0, estimate: 1, listId: 1, userId: 1, giveToId: null, createdAt: new Date(), updatedAt: new Date() },
      { name: 'get cheese', startDate: '2021-02-02', dueDate: '2021-02-03', priority: 2, estimate: 2, listId: 2, userId: 1, giveToId: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'get milk', startDate: '2021-02-02', dueDate: '2021-02-03', priority: 3, estimate: 3, listId: 3, userId: 1, giveToId: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'get eggs', startDate: '2021-02-02', dueDate: '2021-02-03', priority: 0, estimate: 1, listId: 4, userId: 2, giveToId: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: 'get cheese', startDate: '2021-02-02', dueDate: '2021-02-03', priority: 2, estimate: 2, listId: 5, userId: 2, giveToId: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'get milk', startDate: '2021-02-02', dueDate: '2021-02-03', priority: 3, estimate: 3, listId: 6, userId: 2, giveToId: 5, createdAt: new Date(), updatedAt: new Date() },
      { name: 'get eggs', startDate: '2021-02-02', dueDate: '2021-02-03', priority: 0, estimate: 1, listId: 7, userId: 3, giveToId: 6, createdAt: new Date(), updatedAt: new Date() },
      { name: 'get cheese', startDate: '2021-02-02', dueDate: '2021-02-03', priority: 2, estimate: 2, listId: 8, userId: 3, giveToId: null, createdAt: new Date(), updatedAt: new Date() },
      { name: 'get milk', startDate: '2021-02-02', dueDate: '2021-02-03', priority: 3, estimate: 3, listId: 9, userId: 3, giveToId: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'get eggs', startDate: '2021-02-02', dueDate: '2021-02-03', priority: 0, estimate: 1, listId: 10, userId: 4, giveToId: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'get cheese', startDate: '2021-02-02', dueDate: '2021-02-03', priority: 2, estimate: 2, listId: 11, userId: 4, giveToId: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: 'get milk', startDate: '2021-02-02', dueDate: '2021-02-03', priority: 3, estimate: 3, listId: 12, userId: 4, giveToId: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'get eggs', startDate: '2021-02-02', dueDate: '2021-02-03', priority: 0, estimate: 1, listId: 13, userId: 5, giveToId: 5, createdAt: new Date(), updatedAt: new Date() },
      { name: 'get cheese', startDate: '2021-02-02', dueDate: '2021-02-03', priority: 2, estimate: 2, listId: 14, userId: 5, giveToId: 6, createdAt: new Date(), updatedAt: new Date() },
      { name: 'get milk', startDate: '2021-02-02', dueDate: '2021-02-03', priority: 3, estimate: 3, listId: 15, userId: 5, giveToId: null, createdAt: new Date(), updatedAt: new Date() },
      { name: 'get some eggs', startDate: '2021-02-02', dueDate: '2021-02-03', priority: 0, estimate: 1, listId: 16, userId: 6, giveToId: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'get cheese', startDate: '2021-02-02', dueDate: '2021-02-03', priority: 2, estimate: 2, listId: 16, userId: 6, giveToId: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'remember the milk', startDate: '2021-02-02', dueDate: '2021-02-03', priority: 3, estimate: 3, listId: 16, userId: 6, giveToId: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: 'get a box of cereal', startDate: '2021-02-02', dueDate: '2021-02-03', priority: 0, estimate: 1, listId: 16, userId: 6, giveToId: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'get a loaf of bread', startDate: '2021-02-02', dueDate: '2021-02-03', priority: 2, estimate: 2, listId: 16, userId: 6, giveToId: 5, createdAt: new Date(), updatedAt: new Date() },
      { name: 'get a variety of fruit', startDate: '2021-02-02', dueDate: '2021-02-03', priority: 3, estimate: 3, listId: 16, userId: 6, giveToId: 6, createdAt: new Date(), updatedAt: new Date() },
      { name: 'get pancake mix', startDate: '2021-02-02', dueDate: '2021-02-03', priority: 0, estimate: 1, listId: 16, userId: 6, giveToId: null, createdAt: new Date(), updatedAt: new Date() },
      { name: 'get a bag of flower', startDate: '2021-02-02', dueDate: '2021-02-03', priority: 2, estimate: 2, listId: 16, userId: 6, giveToId: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'buy a sack of rice', startDate: '2021-02-02', dueDate: '2021-02-03', priority: 3, estimate: 3, listId: 16, userId: 6, giveToId: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'buy a box of cookies', startDate: '2021-02-02', dueDate: '2021-02-03', priority: 0, estimate: 1, listId: 16, userId: 6, giveToId: 3, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tasks', null, {});
  }
};
