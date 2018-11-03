//I just copied and pasted this part and hopefully changed the
//right variables. 

const express = require('express');
//const feedbackList = [];
const router = express.Router();
const pool = require('../modules/pool.js');


router.get('/', (req, res) => {
  res.send(feedbackList);
});

router.post('/', (req, res) => {
  //console.log(req.body.newElement)
  //feedbackList.push(req.body.newFeedback);
  const feedback = req.body;
  const sqlText = `INSERT INTO feedback (feeling, understanding, support, comments) VALUES ($1, $2, $3, $4)`;
  pool.query(sqlText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
  .then((result) => {
    console.log(`added to database`, employee)
    res.sendStatus(200);
  })
  .catch((error) => {
    console.log(`error on POST to database`, error);
    res.sendStatus(500);
  })
});

module.exports = router;