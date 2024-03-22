const { Router } = require("express");

const router = Router();

const courseController = require("../controllers/CourseController");

// GET methods
router.get("/get/all", courseController.getAllCourses);
router.get("/get/:id", courseController.getCourseById)

// PUT methods
router.put("/update/:id", courseController.updateCourse);

// POST methods
router.post("/add", courseController.addCourse);

// DELETE methods
router.delete("/delete/:id", courseController.deleteCourseById);

module.exports = router;