var express = require('express');
var router = express.Router();
const User = require('../models/userSchema');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Express' });
});

router.post('/register-user', async function(req, res, next){
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.redirect('./login');
  } catch (error) {
    res.send(error);
  }
})

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

module.exports = router;
