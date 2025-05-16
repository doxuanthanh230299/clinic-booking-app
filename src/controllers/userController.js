const userService = require("../services/userService");

exports.register = async (req, res) => {
  try {
    const user = await userService.registerUser(req.body);
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { user, token } = await userService.loginUser(req.body);
    res.json({ user, token });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
