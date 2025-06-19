const { Router } = require('express');
const { createUser, login } = require('../controller/userController');
const router = Router();

router.post('/user', createUser);
router.post('/users', login);

module.exports = router;