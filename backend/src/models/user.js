"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      name: DataTypes.STRING,
      email: { type: DataTypes.STRING, unique: true },
      password: DataTypes.STRING,
      role: {
        type: DataTypes.STRING,
      },
    },
    {}
  );
  User.associate = function (models) {
    User.hasMany(models.Appointment, {
      foreignKey: "patientId",
      as: "Appointments",
    });
    User.hasMany(models.Appointment, {
      foreignKey: "doctorId",
      as: "Schedules",
    });
    User.hasMany(models.Schedule, {
      foreignKey: "doctorId",
      as: "WorkingTimes",
    });
  };
  return User;
};
