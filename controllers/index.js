const router = require('express').Router();
const albumRoutes = require('./albumroutes');
router.use('/', albumRoutes)
module.exports = router;
