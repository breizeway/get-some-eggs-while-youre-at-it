'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Tannor',
        lastName: 'Breitigam',
        email: 'tannor@breitigam.email',
        password: await bcrypt.hash('password1', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'James',
        lastName: 'Aikens',
        email: 'jaikens19@hotmail.com',
        password: await bcrypt.hash('password2', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Jason',
        lastName: 'Slade',
        email: 'jason.slade906@gmail.com',
        password: await bcrypt.hash('password3', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
