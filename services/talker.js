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

module.exports = {
  getTalkers,
  getTalkerById,
};