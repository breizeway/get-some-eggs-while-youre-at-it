'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      start_date: {
        type: Sequelize.DATE
      },
      due_date: {
        type: Sequelize.DATE
      },
      priority: {
        type: Sequelize.INTEGER
      },
      estimate: {
        type: Sequelize.INTEGER
      },
      list_id: {
        type: Sequelize.INTEGER,
        references: { model: "Lists" },
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: "Users" },
        allowNull: false,
      },
      give_to_id: {
        type: Sequelize.INTEGER,
        references: { model: "Users" },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tasks');
  }
};