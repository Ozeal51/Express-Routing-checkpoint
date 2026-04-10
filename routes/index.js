var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('index', { title: 'Home' });
});

router.get('/services', function(req, res) {
    res.render('services', { title: 'Our Services' });
});

router.get('/contact', function(req, res) {
    res.render('contact', { title: 'Contact us' });
});

module.exports = router;