// admin router
const express = require("express");
const router = express.Router();
const adminController = require("../controller/admin.controller");

// router for auth/login and auth/register
router.post("/register", adminController.register);
router.post("/login", adminController.login);

// get all users
router.get("/", adminController.getAllUsers);
// delete user by id
router.delete("/:id", adminController.deleteUser);
// update user by id
router.put("/:id", adminController.updateUser);

module.exports = router;