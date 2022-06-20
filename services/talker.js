const fs = require('fs')
const path =require('path')

const filePath = path.join(__dirname, '../talker.json')

const getTalkers = () => {
  const talks = JSON.parse(fs.readFileSync(filePath))

  return { code: 200, message: talks }
}

module.exports = {
  getTalkers,
}