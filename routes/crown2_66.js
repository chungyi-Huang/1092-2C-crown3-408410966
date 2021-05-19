var express = require('express');
var router = express.Router();
const mysql = require('mysql2');

const categories = require('../data/catagories')

const crown2Controller_66 = require('../controllers/crown2Controller_66')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown2_66', { 
    title: 'Chungyi Huang 408410966 (static)' ,
    data: categories
  });
});

router.get('/homepage', crown2Controller_66.getHomepage);

module.exports = router;
