// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
// const NoteModel = require('../model/noteModel');
// const multer = require('multer');
// const upload = multer();

exports.UploadController = (req, res, next) => {

    res.status(201)
        .json({
            message: 'success',
            data: req.file.filename
        })
}