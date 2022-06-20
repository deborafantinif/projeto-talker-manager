const express = require('express');

const app = express();
app.use(express.json());

module.exports = (err, _req, res, _next) => res.status(500).json(err.message);