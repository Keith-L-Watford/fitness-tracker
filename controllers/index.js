const router = require('express').Router();
const htmlRoutes = require('./html-routes')
const apiRoutes = require("./api/api-routes")

app.use("/", htmlRoutes)
app.use('/', apiRoutes)

module.exports = router;