'use strict';
module.exports = (sequelize, DataTypes) => {
  const TaskToTag = sequelize.define('TaskToTag', {
    task_id: DataTypes.INTEGER,
    tag_id: DataTypes.INTEGER
  }, {});
  TaskToTag.associate = function(models) {
    // associations can be defined here
  };
  return TaskToTag;
};