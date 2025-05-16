'use strict';
module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define('Appointment', {
    patientId: DataTypes.INTEGER,
    doctorId: DataTypes.INTEGER,
    date: DataTypes.STRING,
    time: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  Appointment.associate = function(models) {
    Appointment.belongsTo(models.User, { foreignKey: 'patientId', as: 'Patient' });
    Appointment.belongsTo(models.User, { foreignKey: 'doctorId', as: 'Doctor' });
  };
  return Appointment;
};
