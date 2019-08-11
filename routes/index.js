var express = require('express');
var router = express.Router();
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

/* GET home page. */
router.get('/', ensureLoggedIn(), (req, res, next) => {
  res.render('index', { title: 'Главная | PDMR', user: req.user });
});

module.exports = router;
