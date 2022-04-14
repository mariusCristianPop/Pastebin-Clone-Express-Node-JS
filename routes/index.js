var express = require('express');
var router = express.Router();
var path = require('path');
var dbOperation = require(path.resolve('services/database/db_operations'));

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

/* POST from home page. */
router.post('/', function (req, res, next) {
  console.log(`User has inserted: ${req.body.userInput}`)
  dbOperation.dbInsert(req.body.userInput);
  dbOperation.showContents();
  res.render("index", {
      title: 'ExpressA'
  });
});

/* Startup operations */
dbOperation.dropTable();
dbOperation.createTable();

module.exports = router;