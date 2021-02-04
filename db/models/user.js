'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // const columnMapping = {
    //   through: "Contact",
    //   foreignKey: "userId",
    //   otherKey: "contactId"
    // }
    // User.belongsToMany(models.User, columnMapping);
    User.hasMany(models.List, { foreignKey: 'userId' });
    User.hasMany(models.Note, { foreignKey: 'userId' });
    User.hasMany(models.Tag, { foreignKey: 'userId' });
    User.hasMany(models.Task, { foreignKey: 'userId' });
  };
  return User;
};
