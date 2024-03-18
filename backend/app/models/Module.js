const mongoose = require("mongoose");

const ModuleSchema = new Schema({
    id: Number,
    title: String,
    description: String,
    author: Number,
    videos_id: Number,
    quizzes: Number,
    duration: Number,
    is_mandatory: Boolean,
    reward_points: Number
});

module.exports = mongoose.model;

