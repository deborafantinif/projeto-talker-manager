const express = require('express');
const controller = require('../controllers/login');
const validation = require('../middlewares/validationLogin');

const router = express.Router();

router.post('/', validation, controller.login);

module.exports = router;