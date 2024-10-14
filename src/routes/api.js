const express = require('express')
const { getAccounts } = require('../controllers/AccountManagerController');
const router = express.Router();

router.get('/accounts', getAccounts);

module.exports = router