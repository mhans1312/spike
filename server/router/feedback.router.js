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