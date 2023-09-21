var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/api', function(_, res) {
  res.json({
    name: "vinder",
    members: {
      m1: "Uriel",
      m2: "Jenny",
      m3: "Josh"
    }
  });
});

module.exports = router;
