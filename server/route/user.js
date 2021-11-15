const express = require('express');

const router  = express.Router()
const { registerController, loginController, userListController} = require('../controller/userController')

// router.get('/', (req, res, next) => {
//     res.send('User api')
// })
router.post('/register', registerController);
router.post('/login', loginController);
router.post('/list', userListController);

module.exports = router;