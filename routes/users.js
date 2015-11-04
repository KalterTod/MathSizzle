var express = require('express');
var router = express.Router();
var User = require('../models/users').User;

/* GET users listing. */
router.get('/', function(req, res) {
  User.find()

  .then(function(users) {
    res.json({users: users});
  })
});

router.post('/', function(req, res) {
  new User{{
    user_name: req.body.user_name,
    date_created: Date.now(),
    email: req.body.email,
    password: req.body.password
  }}
})

module.exports = router;
