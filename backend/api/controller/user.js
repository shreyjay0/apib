const userModel = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
module.exports = {
    signup: function (req, res, next) {
        userModel.create({
            name: req.body.name,
            email: req.body.email,
            pass: req.body.pass
        }, function (err, result) {
            if (err)
                next(err);
            else
                res.json({
                    status: "success",
                    message: "You are successfully registered.",
                    data: null
                });
        });
    },
    login: function (req, res, next) {
        userModel.findOne({
            email: req.body.email
        }, function (err, userInfo) {
            if (err) {
                next(err);
            } else {
                if (bcrypt.compareSync(req.body.pass, userInfo.pass)) {
                    const token = jwt.sign({
                        id: userInfo._id
                    }, req.app.get('secretKey'), {
                        expiresIn: '2h'
                    });
                    res.json({
                        status: "success",
                        message: "Login successfull.",
                        data: {
                            user: userInfo,
                            token: token
                        }
                    });
                } else {
                    res.json({
                        status: "error",
                        message: "Incorrect login credentials. Please try again.",
                        data: null
                    });
                }
            }
        });
    },
}