var express = require('express');
var router = express.Router();
var models = require('../server/models/index');
/* GET users listing. */
router.get('/', function (req, res, next) {
    models.User.findAll({}).then(function (users) {
        res.render('users/index', {
            title: 'fazbook',
            users: users
        });
    });
});

/* create a user page. */
router.get('/new', function (req, res, next) {
    res.render('users/new', {
        title: 'new fazbook users'
    });
});

/* put the data from the form into the User table */
router.post('/', function (req, res, next) {
    models.User.create({
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dob: req.body.dob
    }).then(function (users) {
        res.redirect('/users');
    });
});

router.delete('/:id', function (req, res, next) {
    models.User.destroy({
        where: {
            id: req.params.id
        }
    }).then(function (user) {
        res.redirect('/users');
    });
});

module.exports = router;