const express = require('express');
const Router = express.Router();

// 1:19:49

Router.post('/', (req, res) => {
    res.send('Food routes working');
});

module.exports = Router;