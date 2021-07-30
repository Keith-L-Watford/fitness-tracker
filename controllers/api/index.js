const router = require('express').Router();

const workoutRoutes = require("./api-routes")

router.use("/workouts", workoutRoutes)

module.exports = router;