const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutPlanSchema = new Schema({

        name: {
            type: String,
            required: true,
            trim: true,
        },
        models: [
            {
                type: Schema.Types.ObjectId,
                ref: "Exercise"
            }
        ]
});

const WorkoutPlan = mongoose.model("WorkoutPlan", WorkoutPlanSchema)

module.exports = WorkoutPlan;