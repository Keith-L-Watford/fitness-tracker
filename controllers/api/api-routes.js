// utilize router.
const router = require('express').Router();
// create an instance of model
const Workout = require('../../models/workoutModel.js');

// ===============================================


// res = await fetch("/api/workouts");
// aggregate??
// Get all workouts
router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then((db) => {
      console.log(db);
      res.json(db);
    })
    .catch(err => {
      res.status(400).json(err);
    });   
  //   if (err) {
  //     res.json(err);
  //   } else {
  //     res.status(400).json();
  //   }
  // });
});

// const res = await fetch("/api/workouts", {
//   method: "POST",
// POST new workout(???)
router.post("/api/workouts", ({
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
router.get("/api/workouts/range", (req, res) => {
    Workout.find({})

    // aggregate([{
    //   $addFields: {
    //     totalHomework: { $sum: "$homework" } ,
    //     totalQuiz: { $sum: "$quiz" }
    //   }
    // }])


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
router.put("/api/workouts/:id", (req, res) => {
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