const service = require('../services/login');

const login = (req, res) => {
  const { email, password } = req.body;

  const { code, message } = service.login(email, password);

  return res.status(code).json(message);
};

module.exports = {
  login,
};