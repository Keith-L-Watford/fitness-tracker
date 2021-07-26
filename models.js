const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExcerciseSchema = new Schema({
    
});

const Exercise = mongoose.model("Exercise", ExcerciseSchema)

module.exports = Exercise; 