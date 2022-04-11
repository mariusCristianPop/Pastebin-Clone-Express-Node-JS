var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

/* POST to home page. */
router.post('/', function (req, res, next) {
  console.log(`User has inserted: ${req.body.userInput}`)
  res.render("index", {
      title: 'ExpressA'
  });
});

module.exports = router;