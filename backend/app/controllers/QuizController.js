const Quiz = require("../models/Quiz");

const getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.json({ message: "Quizzes retrieved", success: true, quizzes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getQuizById = async (req, res) => {
  const { id } = req.params;

  try {
    const quiz = await Quiz.findById(id);
    if (!quiz) {
      return res.status(404).json({ error: "Quiz not found" });
    }

    res.json({ message: "Quiz retrieved", success: true, quiz });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const addQuiz = async (req, res) => {
  const { name, timeLimit, minimumMarks, deadline, courses } = req.body;

  try {
    const newQuiz = await Quiz.create({
      name,
      timeLimit,
      minimumMarks,
      deadline,
      courses,
    });

    return res
      .status(201)
      .json({ message: "New quiz added", success: true, quiz: newQuiz });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const updateQuiz = async (req, res) => {
  const { id } = req.params;
  const { name, timeLimit, minimumMarks, deadline, courses } = req.body;

  try {
    const existingQuiz = await Quiz.findById(id);
    if (!existingQuiz) {
      return res.status(404).json({ error: "Quiz not found" });
    }

    existingQuiz.name = name;
    existingQuiz.timeLimit = timeLimit;
    existingQuiz.minimumMarks = minimumMarks;
    existingQuiz.deadline = deadline;
    existingQuiz.courses = courses;

    await existingQuiz.save();

    res.json({ message: "Quiz updated", success: true, quiz: existingQuiz });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteQuizById = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedQuiz = await Quiz.findById(id);
    if (!deletedQuiz) {
      return res.status(404).json({ error: "Quiz not found" });
    }

    const deleteProcess = await Quiz.deleteOne({ _id: id });
    if (deleteProcess.deletedCount === 0) {
      return res.status(404).json({ error: "Quiz not found" });
    }

    await Question.updateMany({ quizzes: id }, { $pull: { quizzes: id } });

    res.json({ message: "Quiz deleted", success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getQuizById,
  getAllQuizzes,
  addQuiz,
  updateQuiz,
  deleteQuizById,
};
