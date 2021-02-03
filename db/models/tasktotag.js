'use strict';
module.exports = (sequelize, DataTypes) => {
  const TaskToTag = sequelize.define('TaskToTag', {
    taskId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {});
  TaskToTag.associate = function(models) {
    // associations can be defined here
  };
  return TaskToTag;
};
