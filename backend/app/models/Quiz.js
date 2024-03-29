const mongoose = require("mongoose");
const { Schema } = mongoose;

const QuizSchema = new Schema(
  {
    _id: String,
    name: String,
    timeLimit: Number,
    minimumMarks: Number,
    deadline: Date,
    courses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
  },
  { versionKey: false }
);

const Quiz = mongoose.model("Quiz", QuizSchema);

module.exports = Quiz;
