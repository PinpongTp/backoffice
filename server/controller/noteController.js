const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const NoteModel = require('../model/noteModel');

// todo check list
// create /
// edit /
// delete /
// get by id /
// get list /

exports.CreateController = (req, res, next) => {
    const { title, subtitle, content, postdate } = req.body;
    const Data = new NoteModel(({ title: title, subtitle: subtitle, content: content, postdate: postdate }))

    Data.insert()
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
}


exports.DataController = (req, res, next) => {
    const id = req.params.id;
    //
    NoteModel.findById({ id: id })
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


exports.ListController = (req, res, next) => {
    NoteModel.getList()
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

exports.DeleteController = (req, res, next) => {
    const id = req.params.id;
    //
    NoteModel.deleteById({ id: id })
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

exports.EditController = (req, res, next) => {
    const id = req.params.id;
    const { title, subtitle, content, postdate } = req.body;

    NoteModel.getUserData({ id: id })
        .then(([result]) => {

            const Data = new NoteModel({ id: id, title: title, subtitle: subtitle, content: content, postdate: postdate })

            Data.editUser()
                .then(() => {
                    res.status(200)
                        .json({
                            message: 'success',
                            data: Data,
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

