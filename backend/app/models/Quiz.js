const mongoose = require("mongoose");
const { Schema } = mongoose;

const QuizSchema = new Schema(
  {
    name: String,
    decription: String,
    timeLimit: Number,
    minimumMarks: Number,
    deadline: Number,
    questions: [{ type: Schema.Types.ObjectId, ref: "Questions" }],
  },
  { versionKey: false }
);

const Quiz = mongoose.model("Quiz", QuizSchema);

module.exports = Quiz;
