const router = require('express').Router();
const albumRoutes = require('./albumroutes');
const playlistRoutes = require('./playlistroutes');
const userroutes = require('./userroutes');

router.use('/albums', albumRoutes);
router.use('/user', userroutes);

module.exports = router;
