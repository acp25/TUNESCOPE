const router = require('express').Router();
const albumRoutes = require('./api/albumroutes');
const homeRoutes = require('./homeroutes');
const exploreRoutes = require('./exploreroutes')

router.use('/', homeRoutes);
router.use('/explore', exploreRoutes);
module.exports = router;
