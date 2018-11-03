//I just copied and pasted this part and hopefully changed the
//right variables. 

const express = require('express');
const feedbackList = [];

const router = express.Router();

router.get('/', (req, res) => {
  res.send(feedbackList);
});

router.post('/', (req, res) => {
  //console.log(req.body.newElement)
  feedbackList.push(req.body.newFeedback);
  res.sendStatus(200);
});

module.exports = router;