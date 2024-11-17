const { addUserController, showForm, allUsersController} = require('../controllers/user.controller');
const router = require('express').Router();

router.get('/', showForm);
router.post('/home', addUserController)
router.get('/allUsers', allUsersController)

module.exports = router;