var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  req.logout();
  res.redirect('/pm');
});

module.exports = router;
