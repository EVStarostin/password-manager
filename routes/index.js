const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;
const Account = require('../models/account');

/* GET home page. */  
router.get('/', ensureLoggedIn('/pm/login'), (req, res, next) => {
  Account.find({ user_id: req.user._id })
    .then((accounts) => { 
      res.render('index', { title: 'Главная | PDMR', user: req.user, accounts: accounts });
    })
    .catch((err) => { console.error(err.message) })
});

module.exports = router;
