'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Contacts', [
      { userId: 1, contactId: 5, createdAt: new Date(), updatedAt: new Date() },
      { userId: 1, contactId: 4, createdAt: new Date(), updatedAt: new Date() },
      { userId: 1, contactId: 2, createdAt: new Date(), updatedAt: new Date() },
      { userId: 2, contactId: 4, createdAt: new Date(), updatedAt: new Date() },
      { userId: 2, contactId: 3, createdAt: new Date(), updatedAt: new Date() },
      { userId: 2, contactId: 5, createdAt: new Date(), updatedAt: new Date() },
      { userId: 3, contactId: 1, createdAt: new Date(), updatedAt: new Date() },
      { userId: 4, contactId: 2, createdAt: new Date(), updatedAt: new Date() },
      { userId: 5, contactId: 1, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Contacts', null, {});
  }
};
