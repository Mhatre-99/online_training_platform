const mongoose = require("mongoose");
const { Schema } = mongoose;

const QuizSchema = new Schema({
    _id: String,
    name: String,
    questions: Array,
    answers: Array,
    options: Array,
    time_limit: Number,
    minimum_marks: Number,
    deadline: Date
}, { versionKey: false });

const Quiz = mongoose.model("Quiz", QuizSchema);

module.exports = Quiz;

