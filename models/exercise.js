const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExcerciseSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },

    excercises: {
        type: {
            type: String,
            required: true,
            trim: true,
        },
        name: {
            type: String,
            required: true,
            trim: true,
        },
        duration: {
            type: Number,
            trim: true,
        },
        distance: {
            type: Number,
            trim: true,
        },
        weight: {
            type: Number,
            trim: true,
        },
        reps: {
            type: Number,
            trim: true,
        },
        sets: {
            type: Number,
            trim: true,
        },
    },
});

const Exercise = mongoose.model("Exercise", ExcerciseSchema)

module.exports = Exercise;