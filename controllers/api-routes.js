// utilize router.
const router = require('express').Router();

// create an instance of model
const Workout = require('../models/workoutModel.js');

// Get all workouts
router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .then(db => {

        res.json(db);
      })
      .catch(err => {
        res.status(400).json(err);
      });
});

// GET workout range (?????)
router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
    .then(db => {

        res.json(db);
      })
      .catch(err => {
        res.status(400).json(err);
      });
});
    

// POST(put???) new exercise
router.put("/api/workouts/:id", (req , res) => {
    Workout.findOneAndUpdate(
        {
            _id: req.params.id
        },
        {
          $inc: { totalDuration: req.body.duration },
          $push: { exercises: req.body }
        },


        { new: true })
        .then(dbWorkout => {
          res.json(dbWorkout);
      })

      .catch(err => {
        res.status(400).json(err);
      });
});


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