const router = require('express').Router();
const albumRoutes = require('./albumroutes');
const homeRoutes = require('./homeroutes');
const apiroutes = require('./api');
router.use('/', homeRoutes);
router.use('/api', apiroutes);
router.use('/explore', albumRoutes)
module.exports = router;