const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

router.get('/', (req, res) => {
    return res.send('Node Express Demo App');
});

router.get('/api', (req, res) => {
    return res.send('API Page');
});

module.exports = router;