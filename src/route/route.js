const express = require('express');
const router = express.Router();

const userRoute = require('./user.route');

router.use('/user', userRoute);
router.get('/', (req, res) => res.send('Health Check Call'));

module.exports = router;
