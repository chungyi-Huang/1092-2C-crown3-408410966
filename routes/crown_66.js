var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown_66', { title: 'Chungyi Huang 408410966' });
});

module.exports = router;
