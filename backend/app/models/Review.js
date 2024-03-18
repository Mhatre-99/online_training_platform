const mongoose = require("mongoose");

const ReviewSchema = new Schema({
    id: Number,
    course_id: Number,
    user_id: Number,
    rating: Number,
    description: String
});

module.exports = mongoose.model;

