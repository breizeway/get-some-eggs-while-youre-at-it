'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tasks', [
      { name: 'get eggs', start_date: '2021-02-02', due_date: '2021-02-03', priority: 0, estimate: 1, list_id: 1, user_id: 1, give_to_id: null, createAt: new Date(), updatedAt: new Date() },
      { name: 'get cheese', start_date: '2021-02-02', due_date: '2021-02-03', priority: 2, estimate: 2, list_id: 2, user_id: 1, give_to_id: 1, createAt: new Date(), updatedAt: new Date() },
      { name: 'get milk', start_date: '2021-02-02', due_date: '2021-02-03', priority: 3, estimate: 3, list_id: 3, user_id: 1, give_to_id: 2, createAt: new Date(), updatedAt: new Date() },
      { name: 'get eggs', start_date: '2021-02-02', due_date: '2021-02-03', priority: 0, estimate: 1, list_id: 4, user_id: 2, give_to_id: 3, createAt: new Date(), updatedAt: new Date() },
      { name: 'get cheese', start_date: '2021-02-02', due_date: '2021-02-03', priority: 2, estimate: 2, list_id: 5, user_id: 2, give_to_id: 4, createAt: new Date(), updatedAt: new Date() },
      { name: 'get milk', start_date: '2021-02-02', due_date: '2021-02-03', priority: 3, estimate: 3, list_id: 6, user_id: 2, give_to_id: 5, createAt: new Date(), updatedAt: new Date() },
      { name: 'get eggs', start_date: '2021-02-02', due_date: '2021-02-03', priority: 0, estimate: 1, list_id: 7, user_id: 3, give_to_id: null, createAt: new Date(), updatedAt: new Date() },
      { name: 'get cheese', start_date: '2021-02-02', due_date: '2021-02-03', priority: 2, estimate: 2, list_id: 8, user_id: 3, give_to_id: 1, createAt: new Date(), updatedAt: new Date() },
      { name: 'get milk', start_date: '2021-02-02', due_date: '2021-02-03', priority: 3, estimate: 3, list_id: 9, user_id: 3, give_to_id: 2, createAt: new Date(), updatedAt: new Date() },
      { name: 'get eggs', start_date: '2021-02-02', due_date: '2021-02-03', priority: 0, estimate: 1, list_id: 10, user_id: 4, give_to_id: 3, createAt: new Date(), updatedAt: new Date() },
      { name: 'get cheese', start_date: '2021-02-02', due_date: '2021-02-03', priority: 2, estimate: 2, list_id: 11, user_id: 4, give_to_id: 4, createAt: new Date(), updatedAt: new Date() },
      { name: 'get milk', start_date: '2021-02-02', due_date: '2021-02-03', priority: 3, estimate: 3, list_id: 12, user_id: 4, give_to_id: 5, createAt: new Date(), updatedAt: new Date() },
      { name: 'get eggs', start_date: '2021-02-02', due_date: '2021-02-03', priority: 0, estimate: 1, list_id: 13, user_id: 5, give_to_id: null, createAt: new Date(), updatedAt: new Date() },
      { name: 'get cheese', start_date: '2021-02-02', due_date: '2021-02-03', priority: 2, estimate: 2, list_id: 14, user_id: 5, give_to_id: 1, createAt: new Date(), updatedAt: new Date() },
      { name: 'get milk', start_date: '2021-02-02', due_date: '2021-02-03', priority: 3, estimate: 3, list_id: 15, user_id: 5, give_to_id: 2, createAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tasks', null, {});
  }
};
