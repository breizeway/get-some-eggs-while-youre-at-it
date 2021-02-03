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
    const columnMapping = {
      through: 'TaskToTag',
      foreignKey: 'taskId',
      otherKey: 'tagId'
    }
    Task.belongsToMany(models.Tag, columnMapping);
    Task.belongsTo(models.List, { foreignKey: 'listId' });
    Task.belongsTo(models.User, { foreignKey: 'userId' });
    Task.belongsTo(models.User, { foreignKey: 'giveToId' });
  };
  return Task;
};
