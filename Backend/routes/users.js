const express = require("express");

const userControllers = require("../controllers/users");

const router = express.Router();

router.post("/signup", userControllers.addUsers);
router.get("/getAllUsers", userControllers.getUsers);
router.delete("/deleteUser/:id", userControllers.deleteUser);

module.exports = router;
