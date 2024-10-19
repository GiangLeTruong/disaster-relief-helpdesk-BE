const express = require('express');
const { getAccounts,
} = require('../controllers/AccountManagerController');
const { register, login,
} = require('../controllers/AuthenticationController');
const VerifyToken = require('../middleware/VerifyToken')
const router = express.Router();


router.post('/register', register);
router.post('/login', login);

router.use(VerifyToken);
router.get('/account', getAccounts);
// router.post('/create-account', createAccount);

module.exports = router