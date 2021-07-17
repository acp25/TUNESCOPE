const router = require('express').Router();
const albumRoutes = require('./albumroutes');
const homeRoutes = require('./homeroutes');

router.use('/', homeRoutes);
router.use('/explore', albumRoutes)
module.exports = router;