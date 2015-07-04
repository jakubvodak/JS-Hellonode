var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hello', function(req, res, next) {
    var data = {
      name:"Milan",
      age: 19
    };

    res.send(data);
});

module.exports = router;
