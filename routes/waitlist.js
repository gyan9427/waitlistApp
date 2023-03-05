const express = require('express')
const router = express.Router();
const {waitlistHome,registerCustomer} = require('../controller/waitlist')

router.get('',waitlistHome).post('/register',registerCustomer);


module.exports = router;