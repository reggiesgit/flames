var express = require('express');
var router = express.Router();

const Paragraph = require('../models/TextModel')

/* GET paragraphs listing. */
router.get('/', (req, res) => {
  let filter = req.query

  console.log('Current filters: ' + filter)
  Paragraph.find(filter)
  .then(response => {
    res.json({
      status: 200,
      message: 'success',
      data: JSON.stringify(response, null, 1)
    })
  })
  .catch(err => {
    res.json({
      status: 500,
      message: err.message
    })
  })
})

module.exports = router