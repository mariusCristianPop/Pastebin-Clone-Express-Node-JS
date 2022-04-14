var express = require('express');
var router = express.Router();
var path = require('path');
var dbOperation = require(path.resolve('services/database/db_operations'));
var db = require(path.resolve('services/database/db_connect'));

/* GET home page. */
router.get('/', function (req, res, next) {
  var sql = 'SELECT * FROM binContent';
  db.connection.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('index', {
      title: 'Pastebin Clone',
      userData: data
    });
  });
});

/* POST from home page. */
router.post('/', function (req, res, next) {
  console.log(`User has inserted: ${req.body.userInput}`)
  dbOperation.dbInsert(req.body.userInput);
  var sql = 'SELECT * FROM binContent';
  db.connection.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('index', {
      title: 'Pastebin Clone',
      userData: data
    });
  });
});

/* Startup operations */
// dbOperation.dropTable();
// dbOperation.createTable();

module.exports = router;