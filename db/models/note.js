'use strict';
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
    note: DataTypes.TEXT,
    taskId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  }, {});
  Note.associate = function(models) {
    Note.belongsTo(models.User, { foreignKey: 'userId' });
    Note.belongsTo(models.Task, { foreignKey: 'taskId' });
  };
  return Note;
};
