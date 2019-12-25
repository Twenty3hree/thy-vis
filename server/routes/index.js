let express = require('express');
let router = express.Router();

let sql_operation = require("./operation");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/api/query", function(req, res, next) {
  sql_operation.query(req, res, next);
});

router.get('/queryweek1', function(req, res, next) {
  res.render('firstWeek', { title: 'Express' });
});

module.exports = router;
