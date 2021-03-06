const express = require('express');
const passport = require('passport');
const router = express.Router();
const Product = require('../models/product');

router.get('/', function(req, res, next) {
  Product.find((err, result) => {
    res.render('index', { products: result });
  });
});

router.get('/user/signup', (req, res, next) => {
  res.render('user/signup');
});

router.post('/user/signup', passport.authenticate('local.signup', {
  successRedirect: '/user/profile',
  failureRedirect: '/user/signup',
  failureFlash: true
}));

router.get('/user/profile', (req, res, next) => {
  res.render('user/profile');
});

module.exports = router;