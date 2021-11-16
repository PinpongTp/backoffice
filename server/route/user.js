const express = require('express');

const router  = express.Router()
const { 
    userCreateController, 
    userLoginController, 
    userListController, 
    userDeleteController
} = require('../controller/userController')

// router.get('/', (req, res, next) => {
//     res.send('User api')
// })
router.post('/create', userCreateController);
router.post('/login', userLoginController);
router.get('/list', userListController);
router.delete('/delete/:id', userDeleteController);

module.exports = router;