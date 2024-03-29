const { Router } = require("express");
const router = Router();
const questionController = require("../controllers/QuestionController");

// GET methods
router.get("/question/get/all", questionController.getAllQuestions);
router.get("/question/get/:id", questionController.getQuestionById);
router.get(
  "/question/get-by-quiz/:id",
  questionController.getQuestionsByQuizId
);

// PUT methods
router.put("/question/update/:id", questionController.updateQuestion);

// POST methods
router.post("/question/add", questionController.addQuestion);
router.post(
  "/question/:questionId/add-to-quiz",
  questionController.addQuestionToQuiz
);

// DELETE methods
router.delete("/question/delete/:id", questionController.deleteQuestionById);

module.exports = router;
