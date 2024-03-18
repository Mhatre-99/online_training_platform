const mongoose = require("mongoose");

const CourseSchema = new Schema({
    id: Number,
    name: String,
    description: String,
    deadline: Number,
    tutor: String,
    rating: Number,
    reward_points: Number,
    certificate: String
});

module.exports = mongoose.model;

