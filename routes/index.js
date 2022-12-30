var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'myreserve',
    debug: false
});

/* GET Check Status MySQL. */
router.get('/connect', function(req, res, next) {
    if (db != null) {
        res.send('Successful');
    } else {
        res.send('Unsuccessful');
    }
});

/* GET Login */
router.get('/', function(req, res, next) {
    res.render('Login', { title: 'Login' });
});

module.exports = router;