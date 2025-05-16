'use strict';
module.exports = (sequelize, DataTypes) => {
  const Specialty = sequelize.define('Specialty', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Specialty.associate = function(models) {
    // Add association if needed
  };
  return Specialty;
};
