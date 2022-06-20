const service = require('../services/talker');

const getTalkers = (_req, res) => {
  const { code, message } = service.getTalkers();

  return res.status(code).json(message);
};

const getTalkerById = (req, res) => {
  const { id } = req.params;

  const { code, message } = service.getTalkerById(Number(id));
  return res.status(code).json(message);
};

const createTalker = (req, res) => {
  const { name, age, talk } = req.body;

  const { code, message } = service.createTalker(name, age, talk);

  return res.status(code).json(message);
};

const updateTalker = (req, res) => {
  const { id } = req.params;
  const { name, talk, age } = req.body;

  const { code, message } = service.updateTalker(name, Number(id), talk, age);

  res.status(code).json(message);
};

const deleteTalker = (req, res) => {
  const { id } = req.params;

  const { code, message } = service.deleteTalker(Number(id));

  return res.status(code).json(message);
};

const searchTalker = (req, res) => {
  const { q } = req.query;

  const { code, message } = service.searchTalker(q);

  res.status(code).json(message);
};

module.exports = {
  getTalkers,
  getTalkerById,
  createTalker,
  updateTalker,
  deleteTalker,
  searchTalker,
};