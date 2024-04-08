const express = require('express')
const router = express.Router();

const UserContoller = require('../Controllers/User');

router.post('/register',UserContoller.register);
router.post('/login',UserContoller.Login);

module.exports = router;