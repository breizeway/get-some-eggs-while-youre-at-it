'use strict';
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
    task_id: DataTypes.INTEGER,
    note: DataTypes.TEXT
  }, {});
  Note.associate = function(models) {
    // associations can be defined here
  };
  return Note;
};