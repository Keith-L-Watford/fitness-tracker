const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutPlanSchema = new Schema({

        name: {
            type: String,
            required: true,
            trim: true,
        }
});

const WorkoutPlan = mongoose.model("WorkoutPlan", WorkoutPlanSchema)

module.exports = WorkoutPlan;