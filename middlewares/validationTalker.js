const validateName = (name, res) => {
  if (!name) {
    return res.status(400).json({
      message: 'O campo "name" é obrigatório',
    });
  }

  if (name.length < 3) {
    return res.status(400).json({
      message: 'O "name" deve ter pelo menos 3 caracteres',
    });
  }
};

const validateAge = (age, res) => {
  if (!age) {
    return res.status(400).json({
      message: 'O campo "age" é obrigatório',
    });
  }

  if (age < 18) {
    return res.status(400).json({
      message: 'A pessoa palestrante deve ser maior de idade',
    });
  }
};

const validateWatchedAt = (watchedAt, res) => {
  const regexDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
  const validateDate = regexDate.test(watchedAt);
  
  if (!watchedAt) {
    return res.status(400).json({
      message: 'O campo "watchedAt" é obrigatório',
    });
  }

  if (!validateDate) {
    return res.status(400).json({
      message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
    });
  }
};

const validateRate = (rate, res) => {
  if (!rate) {
    return res.status(400).json({
      message: 'O campo "rate" é obrigatório',
    });
  }

  if (rate < 1 || rate > 5) {
    return res.status(400).json({
      message: 'O campo "rate" deve ser um inteiro de 1 à 5',
    });
  }
};

const validateTalk = (talk, res) => {
  if (!talk) {
    return res.status(400).json({
      message: 'O campo "talk" é obrigatório',
    });
  }

  const { watchedAt, rate } = talk;
  
  validateWatchedAt(watchedAt, res);
  validateRate(rate, res);
};

const validateTalker = (req, res, next) => {
  const { name, age, talk } = req.body;

  validateName(name, res);
  validateAge(age, res);
  validateTalk(talk, res);

  next();
};

module.exports = validateTalker;