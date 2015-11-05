var express = require('express');
var router = express.Router();
var User = require('../models/users').User;
var bodyParser = require('body-parser');

/* GET users listing. */
router.get('/', function(req, res) {
  User.find()

  .then(function(users) {
    res.json({users: users});
  });
});

router.post('/', function(req, res) {
  if(req.body && req.body.user_name && req.body.email) {
    var u = {
      'user_name': req.body.user_name,
      'date_created': Date.now(),
      'email': req.body.email
    };

    console.log(u);
    console.log(req.body.user_name, typeof req.body.user_name);
    console.log(req.body.email, typeof req.body.email);

    new User({
      user_name: req.body.user_name,
      date_created: Date.now(),
      email: req.body.email
    }).save(function(err) {
      if(err) {
        console.log(err);
        res.status(500);
        res.json({Error: 'An error has occurred!'});
      } else {
        res.json({user: u});
      }
    });

  } else {
    res.status(400);
    res.json({Error: 'Your request is missing a required parameter!'});
  }
});

router.get('/me', function(req, res) {
  //TODO Write method to allow retrieval of a single user's information using Header params
});

module.exports = router;
