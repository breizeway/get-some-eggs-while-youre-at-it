'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    name: DataTypes.STRING,
    startDate: DataTypes.DATE,
    dueDate: DataTypes.DATE,
    priority: DataTypes.INTEGER,
    estimate: DataTypes.INTEGER,
    listId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    giveToId: DataTypes.INTEGER
  }, {});
  Task.associate = function(models) {
    // associations can be defined here
  };
  return Task;
};
