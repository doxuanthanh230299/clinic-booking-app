const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require('../models');
const User = db.User;

const registerUser = async ({ name, email, password }) => {
  // Kiểm tra email tồn tại
  const exists = await User.findOne({ where: { email } });
  if (exists) throw new Error("Email already registered");

  // Mã hóa password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Tạo user mới
  const user = await User.create({ name, email, password: hashedPassword });

  return user;
};

const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });
  if (!user) throw new Error("Invalid email");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid password");

  // Tạo token JWT
  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  return { user, token };
};

module.exports = {
  registerUser,
  loginUser,
};
