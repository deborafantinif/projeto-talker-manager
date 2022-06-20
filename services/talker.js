const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../talker.json');

const getTalkers = () => {
  const talks = JSON.parse(fs.readFileSync(filePath));

  return { code: 200, message: talks };
};

const getTalkerById = (id) => {
  const { message } = getTalkers();

  const talker = message.find((t) => t.id === id);

  if (!talker) return { code: 404, message: { message: 'Pessoa palestrante não encontrada' } };

  return { code: 200, message: talker };
};

const createTalker = (name, age, talk) => {
  const { message } = getTalkers();
  const lastId = message[message.length - 1].id;
  const newTalker = {
    name,
    age,
    id: lastId + 1,
    talk,
  };

  message.push(newTalker);

  fs.writeFileSync(filePath, JSON.stringify(message));

  return { code: 201, message: newTalker };
};

const updateTalker = (name, id, talk, age) => {
  const { message } = getTalkers();
  const index = message.findIndex((talker) => talker.id === id);
  message[index] = { name, id, talk, age };
  fs.writeFileSync(filePath, JSON.stringify(message));

  return { code: 200, message: { name, id, talk, age } };
};

const deleteTalker = (id) => {
  const { message } = getTalkers();

  const index = message.findIndex((talker) => talker.id === id);

  message.splice(index, 1);

  fs.writeFileSync(filePath, JSON.stringify(message));

  return { code: 204, message: '' };
};

module.exports = {
  getTalkers,
  getTalkerById,
  createTalker,
  updateTalker,
  deleteTalker,
};