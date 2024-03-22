const mongoose = require("mongoose");
const { Schema } = mongoose;

const CourseSchema = new Schema({
    _id: String,
    name: String,
    description: String,
    deadline: Number,
    tutor: String,
    rating: Number,
    reward_points: Number,
    certificate: String
}, { versionKey: false });

const Course = mongoose.model("Course", CourseSchema);

module.exports = Course;

