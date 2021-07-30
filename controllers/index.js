const router = require('express').Router();
const htmlRoutes = require('./html-routes')
const apiRoutes = require("./api")

// IT WAS THIS router.use not app.use
router.use("/", htmlRoutes)
router.use('/api', apiRoutes)

module.exports = router;