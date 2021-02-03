'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contact', {
    userId: DataTypes.INTEGER,
    contactId: DataTypes.INTEGER
  }, {});
  Contact.associate = function(models) {
    // associations can be defined here
  };
  return Contact;
};
