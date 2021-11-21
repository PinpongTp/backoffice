const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserModel = require('../model/userModel');

exports.userCreateController = (req, res, next) => {
    const { name, username, email, password } = req.body;
    bcrypt.hash(password, 10)
        .then((hash) => {
            const User = new UserModel({ name: name, username: username, email: email, password: hash })

            //Todo เช็คก่อนว่ามีข้อมูล user ไหม

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


exports.userLoginController = (req, res, next) => {
    const { username = '', password } = req.body;
    UserModel.findUserByUsername({ username: username })
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
                                name: row[0].user,
                                username: row[0].username,
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

exports.userDataController = (req, res, next) => {
    const id = req.params.id;
    //
    UserModel.getUserData({ id: id })
        .then(([result]) => {
            res.status(200)
                .json(result[0])
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
                .json(result)
        })
        .catch((error) => {
            res.status(500)
                .json({
                    message: error
                })
        })
}

exports.userDeleteController = (req, res, next) => {
    const id = req.params.id;
    //
    UserModel.deleteUserById({ id: id })
        .then(([result]) => {
            // todo check delete status
            res.status(200)
                .json(result)
        })
        .catch((error) => {
            res.status(500)
                .json({
                    message: error
                })
        })
}

exports.userEditController = (req, res, next) => {
    const id = req.params.id;
    const { name, username, email } = req.body;

    UserModel.getUserData({ id: id })
        .then(([result]) => {

            
            const User = new UserModel({ id: id, name: name, username: username, email: email, password: result[0].password })

            User.editUser()
                .then(() => {
                    res.status(200)
                        .json({
                            message: 'success',
                            user: User,
                            name: name,
                            username, username
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



   

    //Todo เช็คก่อนว่ามีข้อมูล user ไหม

    // User.registerUser()
    //     .then(() => {
    //         res.status(201)
    //             .json({
    //                 message: 'success'
    //             })
    //     }).catch((error) => {
    //         res.status(500)
    //             .json({
    //                 message: error
    //             })
    //     })
}

