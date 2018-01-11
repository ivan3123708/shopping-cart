const mongoose = require('mongoose');
const Product = require('../models/product');

mongoose.connect('mongodb://localhost/shopping_cart');

const products = [
  new Product({
    image: 'https://cdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s8-.jpg',
    title: 'Samsung Galaxy S8',
    description: '5.8" 1440x2960 pixels, 12MP 2160p, 4GB RAM Exynos 8895 Octa, 3000mAh Li-Ion',
    price: 650
  }),
  new Product({
    image: 'https://cdn2.gsmarena.com/vv/bigpic/samsung-galaxy-c7-2017.jpg',
    title: 'Samsung Galaxy C7 (2017)',
    description: '5.5" 1080x1920 pixels, 13MP 1080p, 4GB RAM, 3000mAh Li-Ion',
    price: 650
  }),
  new Product({
    image: 'https://cdn2.gsmarena.com/vv/bigpic/samsung-galaxy-c5-pro-sm-c5010.jpg',
    title: 'Samsung Galaxy C5 Pro',
    description: '5.2" 1080x1920 pixels, 16MP 1080p, 4GB RAM Snapdragon 626, 2600mAh Li-Ion',
    price: 650
  }),
];

let count = 0;

products.forEach((product) => {
  product.save((err, result) => {
    count++;
    if(count === products.length) {
      mongoose.disconnect();
    }
  });
});