const express = require('express');
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

router.post('/user/signup', (req, res, next) => {
  res.redirect('/');
});

module.exports = router;