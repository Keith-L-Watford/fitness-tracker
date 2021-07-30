// utilize router.
const router = require('express').Router();
// create an instance of model
const Workout = require('../../models/workoutModel.js');

// ===============================================


// res = await fetch("/api/workouts");
// aggregate??
// Get all workouts
router.get("/", (req, res) => {
  Workout.aggregate([{
    $addFields: {
      totalDuration: { $sum: "$exercises.duration" }
    }
  }]).sort({ day: -1 }).limit(7)

    .then(db => {
      res.json(db);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

// const res = await fetch("/api/workouts", {
//   method: "POST",
// POST new workout(???)
router.post("/", ({
  body
}, res) => {
  Workout.create(body)
    .then((db) => {
      res.json(db);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});



// async getWorkoutsInRange() {
// const res = await fetch(`/api/workouts/range`);
// agregate??
// GET workout range
router.get("/range", (req, res) => {
    Workout.aggregate([{
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" }
      }
    }]).sort({ day: -1 }).limit(7)


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
router.put("/:id", (req, res) => {
  // console.log(req.params.id);
  Workout.findByIdAndUpdate(
    {
      _id: req.params.id
    }, {
      // $inc: { totalDuration: req.body.duration },
      $push: {
        exercises: req.body
      }
    }, {
      new: true
    })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// https://docs.mongodb.com/manual/reference/operator/aggregation/
module.exports = router;