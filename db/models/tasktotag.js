'use strict';
module.exports = (sequelize, DataTypes) => {
  const TaskToTag = sequelize.define('TaskToTag', {
    taskId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {});
  TaskToTag.associate = function(models) {
    TaskToTag.belongsTo(models.Task, { foreignKey: 'taskId' });
    TaskToTag.belongsTo(models.Tag, { foreignKey: 'tagId' });
  };
  return TaskToTag;
};
