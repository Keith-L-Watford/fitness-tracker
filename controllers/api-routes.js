// utilize router.
const router = require('express').Router();
// create an instance of model
const Workout = require('../models/workoutModel.js');

// ===============================================


// res = await fetch("/api/workouts");
// aggregate??
// Get all workouts
router.get("/api/workouts", (req, res) => {
    
  });

  // async getWorkoutsInRange() {
    // const res = await fetch(`/api/workouts/range`);
    // agregate??
// GET workout range
router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
    .then(db => {

        res.json(db);
      })
      .catch(err => {
        res.status(400).json(err);
      });
});
    

// const res = await fetch("/api/workouts/" + id, {
//   method: "PUT",
// PUT new exercise
router.put("/api/workouts/:id", ( { body, params } , res) => {
  console.log(req.params.id);
    Workout.findByIdAndUpdate(
        
            params.id,
        
        {
          // $inc: { totalDuration: req.body.duration },
          $push: { exercises: body }
        },
        { new: true })
        .then(dbWorkout => {
          res.json(dbWorkout);
      })

      .catch(err => {
        res.status(400).json(err);
      });
});


// const res = await fetch("/api/workouts", {
//   method: "POST",
// POST new workout(???)
router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
    .then(db => {
        res.json(db);
      })
      .catch(err => {
        res.status(400).json(err);
      });
});





// GET combined weight of multiple exercises from the past seven workouts on the stats page.


// GET total duration of each workout from the past seven workouts on the stats page.

// '$add'



// https://docs.mongodb.com/manual/reference/operator/aggregation/
module.exports = router;