const express = require('express');
const router = express.Router();

const textController = require('../controller/textController.js');

router.get('/next', textController.getNext);
router.post('/new', textController.createText);

module.exports = router