const express = require('express');
const controller = require('../controllers/talker');

const router = express.Router();

router.get('/', controller.getTalkers);

router.get('/:id', controller.getTalkerById);

module.exports = router;