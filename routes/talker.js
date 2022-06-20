const express = require('express');
const controller = require('../controllers/talker');
const authentication = require('../middlewares/authentication');
const validateTalker = require('../middlewares/validationTalker');

const router = express.Router();

router.get('/', controller.getTalkers);

router.get('/:id', controller.getTalkerById);

router.post('/', authentication, validateTalker, controller.createTalker);

router.put('/:id', authentication, validateTalker, controller.updateTalker);

module.exports = router;