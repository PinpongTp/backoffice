const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserModel = require('../model/userModel');

exports.registerController = (req, res, next) => {
    const { email, password } = req.body;
    bcrypt.hash(password, 10)
        .then((hash) => {
            const User = new UserModel({ email: email, password: hash })

            // เช็คก่อนว่ามีข้อมูล user ไหม

            User.registerUser()
                .then(() => {
                    res.status(201)
                        .json({
                            message: 'success'
                        })
                }).catch((error) => {
                    res.status(500)
                        .json({
                            message: error
                        })
                })
        })
        .catch((error) => {
            res.status(500)
                .json({
                    message: error
                })
        })
}


exports.loginController = (req, res, next) => {
    const { email = '', password } = req.body;
    UserModel.findUserByEmail({ email: email })
        .then(([row]) => {
            if (row.length !== 0) {
                return bcrypt.compare(password, row[0].password)
                    .then((result) => {
                        if (!result) {
                            res.status(401)
                                .json({
                                    message: "Authentication failed"
                                })
                        } else {
                            let jwtToken = jwt.sign({
                                email: row[0].email,
                                userId: row[0].id
                            },
                                "KEY-create-authen-nodejs", {
                                expiresIn: "1h"
                            });
                            res.status(200).json({
                                token: jwtToken,
                                expiresIn: 3600,
                            });
                        }
                    }).catch((error) => {
                        res.status(401)
                            .json({
                                message: "Authentication failed",
                                error: error
                            })
                    })
            } else {
                res.status(401)
                    .json({
                        message: "Authentication failed"
                    })
            }
        })
        .catch((error) => {
            res.status(500)
                .json({
                    message: error
                })
        })
}


exports.userListController = (req, res, next) => {
    UserModel.getUserList()
        .then(([result]) => {
            res.status(200)
                .json({
                    message: "success",
                    data: result
                })
        })
        .catch((error) => {
            res.status(500)
                .json({
                    message: error
                })
        })
}