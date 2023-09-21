var express = require('express');
const { send } = require('express/lib/response');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/webs', function(req,res,next){
  res.render('chat', {title: "Websocket", style: "/stylesheets/chat.css"});
});

module.exports = router;
