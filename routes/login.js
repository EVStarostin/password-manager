var express = require('express');
var passport = require('passport');

var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('login', { title: 'Вход на PDMR | PDMR', messages: req.flash('error') });
});

router.post('/', 
  passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login', failureFlash: true }),
  (req, res) => { res.redirect('/') }
);

module.exports = router;
