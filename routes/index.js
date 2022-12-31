var express = require('express');
var router = express.Router();
// CheckStatus: Boolean;
CheckStatus = false;
UserPK = 0;
// UserPK: Number = 0;
// UserName: String = "";

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
    CheckStatus = false;
    UserPK = 0;
    res.render('Login', { datatabelid: {}, A: '0' });
});
router.post('/', function(req, res, next) {
    if (req.body.User != "" && req.body.Password != "") {
        db.query('SELECT * FROM user WHERE User = ? and Password = ?', [req.body.User, req.body.Password], function(err, rs) {
            if (rs[0] != undefined) {
                if (rs[0].Status == 'Admin') {
                    CheckStatus = true;
                } else {
                    CheckStatus = false;
                }
                UserPK = rs[0].No;
                db.query('SELECT * FROM seat', function(err, rs) {
                    res.render('Reserve', { datatabelid: rs, C: CheckStatus });
                })
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
    db.query('SELECT * FROM seat', function(err, rs) {
        res.render('Reserve', { datatabelid: rs, C: CheckStatus });
    });
});
router.get('/ShowData', function(req, res, next) {
    db.query('SELECT * FROM `reserve` INNER JOIN `seat` ON `reserve`.`SeatNo` = `seat`.`No` INNER JOIN `user` ON `reserve`.`UserNo` = `user`.`No`', function(err, rs) {
        res.render('ShowData', { datatabelid: rs, C: CheckStatus });
    });

});
router.get('/Send', function(req, res, next) {
    db.query('SELECT * FROM `reserve` WHERE UserNo = ?', UserPK, function(err, rs) {
        console.log(req.query.id);
        if (rs[0] == undefined) {
            db.query("INSERT INTO `reserve` (`No`, `UserNo`, `SeatNo`) VALUES (NULL, ?, ?);", [UserPK, req.query.id], function(err, rs) {
                res.render('Login', { datatabelid: {}, A: '0' });
            });
            db.query("UPDATE `seat` SET `Status` = 'Reserve' WHERE `seat`.`No` = ?;", req.query.id, function(err, rs) {
                res.render('Login', { datatabelid: {}, A: '0' });
            });
        }
        res.redirect('/Reserve');
    });
});

module.exports = router;