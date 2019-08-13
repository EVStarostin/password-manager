var express = require('express');
var passport = require('passport');

var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('login', { title: 'Вход | PDMR', messages: req.flash('error') });
});

router.post('/', 
  passport.authenticate('local', { successRedirect: '/pm', failureRedirect: '/pm/login', failureFlash: true })
);

module.exports = router;
