var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let nombre = "Jose"
  let cedula = "1212312"

  res.render('index', {
    title: 'UNERG',
    name: nombre,
    cedula,
  });
});

router.get('/otro', function(req, res, next) {
  let nombre = "Juan"
  let cedula = "3243242"

  res.render('index', {
    title: 'UNERG',
    name: nombre,
    cedula,
  });
});

module.exports = router;
