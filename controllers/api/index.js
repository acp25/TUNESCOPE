const router = require('express').Router();
const albumRoutes = require('./albumroutes');
const playlistRoutes = require('./playlistroutes');

router.use('/playlists', playlistRoutes);
router.use('/albums', albumRoutes);

module.exports = router;