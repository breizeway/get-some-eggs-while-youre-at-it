'use strict';
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
    note: DataTypes.TEXT,
    task_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
  }, {});
  Note.associate = function(models) {
    // associations can be defined here
  };
  return Note;
};