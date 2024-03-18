const mongoose = require("mongoose");

const QuizSchema = new Schema({
    id: Number,
    name: String,
    questions: Array,
    answers: Array,
    options: Array,
    time_limit: Number,
    minimum_marks: Number,
    deadline: Date
});

module.exports = mongoose.model;

