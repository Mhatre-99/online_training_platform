const mongoose = require("mongoose");
const { Schema } = mongoose;

const QuestionSchema = new Schema(
  {
    _id: String,
    question: String,
    options: [String],
    answer: String,
    marks: Number,
    quizzes: [{ type: Schema.Types.ObjectId, ref: "Quiz" }],
  },
  { versionKey: false }
);

const Question = mongoose.model("Question", QuestionSchema);

module.exports = Question;
