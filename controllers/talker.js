const service = require('../services/talker');

const getTalkers = (_req, res) => {
  const { code, message } = service.getTalkers();

  return res.status(code).json(message);
};

const getTalkerById = (req, res) => {
  const { id } = req.params;

  const { code, message } = service.getTalkerById(id);
  return res.status(code).json(message);
};

const createTalker = (req, res) => {
  const { name, age, talk } = req.body;

  const { code, message } = service.createTalker(name, age, talk);

  return res.status(code).json(message);
};

module.exports = {
  getTalkers,
  getTalkerById,
  createTalker,
};