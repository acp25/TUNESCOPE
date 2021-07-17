const router = require('express').Router();
const albumRoutes = require('./albumroutes');
const homeRoutes = require('./')
router.use('/', albumRoutes)
module.exports = router;
