// get these live to see where im going.
const router = require('express').Router();
const path = require("path")

router.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
router.get('/exercise', (req, res) => res.sendFile(path.join(__dirname, 'exercise.html')));
router.get('/stats', (req, res) => res.sendFile(path.join(__dirname, 'stats.html')));

// GET combined weight of multiple exercises from the past seven workouts on the stats page.
// GET total duration of each workout from the past seven workouts on the stats page.
module.exports = router