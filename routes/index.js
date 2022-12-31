var express = require('express');
var router = express.Router();
CheckStatus: Boolean;

var mysql = require('mysql');
var db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'myreserve',
    debug: false
});

router.get('/connect', function(req, res, next) {
    if (db != null) {
        res.send('Successful');
    } else {
        res.send('Unsuccessful');
    }
});
router.get('/', function(req, res, next) {
    res.render('Login', { datatabelid: {}, A: '0' });
});
router.post('/', function(req, res, next) {
    if (req.body.User != "" && req.body.Password != "") {
        db.query('SELECT * FROM user WHERE User = ? and Password = ?', [req.body.User, req.body.Password], function(err, rs) {
            // console.log(rs[0].Status);
            if (rs[0] != undefined) {
                if (rs[0].Status == 'Admin') {
                    CheckStatus = true;
                } else {
                    CheckStatus = false;
                }
                // console.log(CheckStatus);
                res.render('Reserve', { title: 'Reserve' });
            } else {
                res.render('Login', { datatabelid: {}, A: '1' });
            }
        });
    } else {
        res.render('Login', { datatabelid: {}, A: '2' });
    }
});
router.get('/Register', function(req, res, next) {
    res.render('Register', { datatabelid: {}, A: '0' });
});
router.post('/Register', function(req, res, next) {
    if (req.body.User != "" && req.body.Password != "") {
        db.query("INSERT INTO user SET ?", req.body, function(err, rs) {
            res.render('Login', { datatabelid: {}, A: '0' });
        });
    } else {
        res.render('Register', { datatabelid: {}, A: '1' });
    }
});
router.get('/Reserve', function(req, res, next) {
    res.render('Reserve', { title: 'Reserve' });
});
module.exports = router;