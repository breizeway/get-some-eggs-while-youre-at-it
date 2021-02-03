'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contact', {
    userId: DataTypes.INTEGER,
    contactId: DataTypes.INTEGER
  }, {});
  Contact.associate = function(models) {
    Contact.belongsTo(models.User, { foreignKey: 'userId' });
    Contact.belongsTo(models.User, { foreignKey: 'contactId' });
  };
  return Contact;
};
