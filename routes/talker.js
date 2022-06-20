const express = require("express")
const controller = require('../controllers/talker')

const router = express.Router();

router.get('/', controller.getTalkers)

module.exports = router;