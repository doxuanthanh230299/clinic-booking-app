const Appointment = require("../models/Appointment");
const User = require("../models/User");

const bookAppointment = async ({ patientId, doctorId, date, time }) => {
  // Có thể thêm kiểm tra lịch trùng hoặc validate ngày giờ ở đây

  const appointment = await Appointment.create({
    patientId,
    doctorId,
    date,
    time,
    status: "pending",
  });

  return appointment;
};

const getAppointmentsByDoctor = async (doctorId) => {
  const appointments = await Appointment.findAll({
    where: { doctorId },
    include: [
      { model: User, as: "Patient", attributes: ["id", "name", "email"] },
    ],
  });

  return appointments;
};

module.exports = {
  bookAppointment,
  getAppointmentsByDoctor,
};
