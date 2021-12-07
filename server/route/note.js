const express = require('express');
const multer  = require('multer');
const { UploadController } = require('../controller/fileController');
const upload = multer({ dest: '../public/data/uploads/' })

const router  = express.Router()
const { 
    CreateController, 
    ListController, 
    DeleteController,
    DataController,
    EditController
} = require('../controller/noteController')

router.post('/create', CreateController);
router.get('/list', ListController);
router.post('/edit/:id', EditController);
router.get('/data/:id', DataController);
router.delete('/delete/:id', DeleteController);
router.post('/upload', upload.array('image'), UploadController);

// router.post('/upload', upload.single('image'), function (req, res, next) {
//     res.status(201)
//     .json({
//         message: 'success',
//         req: req
//     })
// })



module.exports = router;