var express = require('express');
var router = express.Router();

/* GET more page. */
router.get('/', function(req, res, next) {
  res.render('more', { title: 'More about Jeffrey Brayne' });
});

module.exports = router;
