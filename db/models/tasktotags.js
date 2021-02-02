'use strict';
module.exports = (sequelize, DataTypes) => {
  const TaskToTags = sequelize.define('TaskToTags', {
    task_id: DataTypes.INTEGER,
    tag_id: DataTypes.INTEGER
  }, {});
  TaskToTags.associate = function(models) {
    // associations can be defined here
  };
  return TaskToTags;
};