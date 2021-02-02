'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserToContact = sequelize.define('UserToContact', {
    user_id: DataTypes.INTEGER,
    contact_id: DataTypes.INTEGER
  }, {});
  UserToContact.associate = function(models) {
    // associations can be defined here
  };
  return UserToContact;
};