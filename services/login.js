const randtoken = require('rand-token');

const login = (_email, _password) => {
  const token = randtoken.generate(16);

  return { code: 200, message: { token } };
};

module.exports = {
  login,
};