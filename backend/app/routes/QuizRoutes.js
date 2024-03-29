const { Router } = require("express");
const router = Router();
const quizController = require("../controllers/QuizController");

// GET methods
router.get("/quiz/get/all", quizController.getAllQuizzes);
router.get("/quiz/get/:id", quizController.getQuizById);

// PUT methods
router.put("/quiz/update/:id", quizController.updateQuiz);

// POST methods
router.post("/quiz/add", quizController.addQuiz);

// DELETE methods
router.delete("/quiz/delete/:id", quizController.deleteQuizById);

module.exports = router;
