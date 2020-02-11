const { Router } = require('express');
const router = Router();
const { signin, signup, profile } = require('../controllers/auth.controllers');
const verifyToken = require('../libs/verifyToken');

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/profile', verifyToken, profile);

module.exports = router;
