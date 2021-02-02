'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    name: DataTypes.STRING,
    start_date: DataTypes.DATE,
    due_date: DataTypes.DATE,
    priority: DataTypes.INTEGER,
    estimate: DataTypes.INTEGER,
    list_id: DataTypes.INTEGER,
    location_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    give_to_id: DataTypes.INTEGER
  }, {});
  Task.associate = function(models) {
    // associations can be defined here
  };
  return Task;
};