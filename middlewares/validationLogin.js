const validationEmail = (email, res) => {
  if (!email) {
  return res.status(400).json({
    message: 'O campo "email" é obrigatório',
  }); 
}

  const regex = /\S+@\S+\.\S+/;
  const validate = regex.test(email);

  if (!validate) {
  return res.status(400).json({
    message: 'O "email" deve ter o formato "email@email.com"',
  }); 
}
};

const validationPassword = (password, res) => {
  if (!password) {
    return res.status(400).json({
      message: 'O campo "password" é obrigatório',
    }); 
  }

  if (password.length < 6) {
    return res.status(400).json({
      message: 'O "password" deve ter pelo menos 6 caracteres',
    }); 
  }
};

const validationLogin = (req, res, next) => {
  const { email, password } = req.body;

  validationEmail(email, res);
  validationPassword(password, res);

  next();
};

module.exports = validationLogin;