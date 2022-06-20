const express = require('express');
const controller = require('../controllers/talker');
const authentication = require('../middlewares/authentication');
const validateTalker = require('../middlewares/validationTalker');

const router = express.Router();

router.get('/', controller.getTalkers);

router.get('/search', authentication, controller.searchTalker);

router.get('/:id', controller.getTalkerById);

router.post('/', authentication, validateTalker, controller.createTalker);

router.put('/:id', authentication, validateTalker, controller.updateTalker);

router.delete('/:id', authentication, controller.deleteTalker);

module.exports = router;