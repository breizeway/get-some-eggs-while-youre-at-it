'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserToContacts', [
      { user_id: 1, contact_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 1, contact_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 1, contact_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2, contact_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2, contact_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2, contact_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 3, contact_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 4, contact_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 5, contact_id: 1, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserToContacts', null, {});
  }
};
