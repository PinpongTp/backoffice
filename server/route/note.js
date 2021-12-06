const express = require('express');

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

module.exports = router;