const router = require('express').Router();
const userRoutes = require('./userroutes');

router.use('/login', userRoutes);

module.exports = router;