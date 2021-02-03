'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Tag.associate = function(models) {
    const columnMapping = {
      through: 'TaskToTag',
      foreignKey: 'tagId',
      otherKey: 'taskId'
    }
    Tag.belongsToMany(models.Task, columnMapping);
    Tag.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Tag;
};
