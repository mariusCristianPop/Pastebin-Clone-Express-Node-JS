var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('test', { title: 'ExpressA' });;
});

module.exports = router;