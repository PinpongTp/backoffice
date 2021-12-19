const express = require('express');
const multer = require('multer');
const { UploadController } = require('../controller/fileController');

const { v4: uuidv4 } = require('uuid');

let storage = multer.diskStorage({
    destination: './public/data/uploads/',
    filename: function (req, file, cb) {

        if (file.mimetype == 'image/jpeg') {
            cb(null, uuidv4() + '-' + Date.now() + '.jpeg') 
        } else if (file.mimetype == 'image/jpg') {
            cb(null, uuidv4() + '-' + Date.now() + '.jpg') 
        } else if (file.mimetype == 'image/png') {
            cb(null, uuidv4() + '-' + Date.now() + '.png') 
        }

    }
})

let upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});

const router = express.Router()
const {
    CreateController,
    ListController,
    DeleteController,
    DataController,
    EditController
} = require('../controller/noteController')

router.post('/create', upload.single('thumbnail'), CreateController);
router.get('/list', ListController);
router.post('/edit/:id', EditController);
router.get('/data/:id', DataController);
router.delete('/delete/:id', DeleteController);
router.post('/upload', upload.single('image'), UploadController);

module.exports = router;