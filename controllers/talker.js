const service = require('../services/talker')

const getTalkers = (req, res) => {
  const { code, message } = service.getTalkers()

  return res.status(code).json(message);
}

module.exports = {
  getTalkers,
}