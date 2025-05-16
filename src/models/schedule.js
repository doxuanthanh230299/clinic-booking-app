'use strict';
module.exports = (sequelize, DataTypes) => {
  const Schedule = sequelize.define('Schedule', {
    doctorId: DataTypes.INTEGER,
    date: DataTypes.STRING,
    time: DataTypes.STRING
  }, {});
  Schedule.associate = function(models) {
    Schedule.belongsTo(models.User, { foreignKey: 'doctorId', as: 'Doctor' });
  };
  return Schedule;
};
