var router=require("express").Router();
var passport = require('passport');
var jwt = require('jsonwebtoken');
var User = require('../models/user');

var secret = '7x0jhxt"9(thpX6';

router.post('/login', function (req, res, next) {
    passport.authenticate('local', function (err, user, info) {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.json({ error: 'Invalid credentials.' });
      }
      if (user) {
        var token = jwt.sign({ id: user._id, username: user.username }, secret);
        return res.json({ token });
      }
    })(req, res, next);
  });
  
router.post('/register', function (req, res) {
    User.register(new User({ username: req.body.username,name: req.body.name,DOB: req.body.dob,height:req.body.height,weight:req.body.weight,avgrat:0,totalrat:0}), req.body.password, function (err, user) {
      if (err) {
        return res.status(400).send({ error: 'Email address in use.' })
      }
      res.json(user);
    });
  });
  
  module.exports = router;
  
