var express = require('express');
var router = express.Router();

const Paragraph = require('../models/TextModel')

let page = 0;
let part = 1;

/* var pleaseFind = function finder(param) {
  return new Promise((resolve, reject) => {
    Paragraph.find(param, function(err, result) {
      if (err) {
        return reject(err);
      }
      let obj = JSON.stringify(result);
      result = JSON.parse(obj);
      return resolve(result);
    })
  })
} */

/* GET next paragraph. */
router.get('/next', (req, res) => {
  let filter = {};
  filter['paragraphNr'] = page;
  filter['paragraphPart'] = part;

  console.log('Looking for page ', page, ' part ', part);
  Paragraph.find(filter)
  .then(response => {
    res.json({
      status: 200,
      message: 'success',
      data: JSON.stringify(response, null, 1)
    })
    if(response[0].hasNextParagraph) {
      page += 1;
      part = 1;
    } else {
      part += 1;
    }
  })
  .catch(err => {
    res.json({
      status: 500,
      message: err.message
    })
  })
})

/* GET paragraphs listing. 
router.get('/', (req, res) => {
  let filter = req.query
  
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
})*/

module.exports = router