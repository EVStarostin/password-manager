const express = require('express');
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;
const Account = require('../models/account');

const router = express.Router();

router.get('/', ensureLoggedIn(), (req, res, next) => {
  res.render('account', { title: 'Новая учётная запись | PDMR', user: req.user });
});

router.post('/', ensureLoggedIn(), (req, res, next) => {
  const account = new Account({
    name: req.body.name,
    login: req.body.login,
    password: req.body.password,
    user_id: req.body.user_id
  });

  account
    .save()
    .then(() => { res.redirect('/') })
    .catch((err) => { res.redirect('/account') });
});

module.exports = router;
