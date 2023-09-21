var express = require('express');
var router = express.Router();

router.get('/login', function(req, res, next) {
    res.render('inicio_s', { title: 'HackaTec - Inicio Sesion', style: "/stylesheets/form.css"});
  });
  
  router.get('/register', function(req, res, next) {
    res.render('registro', { title: 'HackaTec - Registro', style: "/stylesheets/form.css"});
  });

module.exports = router;