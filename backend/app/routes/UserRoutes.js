const { Router } = require("express");

const router = Router();

const userController = require("../controllers/UserController");

// GET methods
router.get("/get/all", userController.getAllUsers);
router.get("/get/:id", userController.getUserById)

// PUT methods
router.put("/update/:id", userController.updateUser);

// POST methods
router.post("/add", userController.addUser);

// DELETE methods
router.delete("/delete/:id", userController.deleteUserById);

module.exports = router;