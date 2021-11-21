const express = require('express');

const router  = express.Router()
const { 
    userCreateController, 
    userLoginController, 
    userListController, 
    userDeleteController,
    userDataController,
    userEditController
} = require('../controller/userController')

// router.get('/', (req, res, next) => {
//     res.send('User api')
// })
router.post('/create', userCreateController);
router.post('/login', userLoginController);
router.get('/list', userListController);
router.post('/edit/:id', userEditController);
router.get('/userdata/:id', userDataController);
router.delete('/delete/:id', userDeleteController);

module.exports = router;