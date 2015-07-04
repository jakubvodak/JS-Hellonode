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

router.post('/user', function(req, res, next) {

    req.checkBody('name', 'Name cannot be empty').notEmpty();

    req.checkBody('age', 'Age cannot be text').isInt();

    var valErrors = req.validationErrors();

    if (valErrors) {
      var errorData = {
        error:"InvalidRequest",
        message:valErrors
      };

      return res.send(errorData);
    };

    //save to database

    var profile = {
      name: req.body.name,
      age: req.body.age
    };

    res.send(profile);
});


module.exports = router;
