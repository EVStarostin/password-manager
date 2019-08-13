const express = require('express');
const passport = require('passport');
const User = require('../models/user');

var router = express.Router();

router.get('/', (req, res, next) => {
  res.render('register', { title: 'Регистрация | PDMR', messages: req.flash('error') });
});

router.post('/', (req, res, next) => {
  User.register(new User({ username : req.body.username }), req.body.password, (err, user) => {
    if (err) {
      req.flash('error', err.message);
      return res.redirect('/pm/register');
    }

    passport.authenticate('local')(req, res, () => {
      req.session.save((err) => {
        if (err) {
          return next(err);
        }
        res.redirect('/pm');
      });
    });
  });
});

module.exports = router;
