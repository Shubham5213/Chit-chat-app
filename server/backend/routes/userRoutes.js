const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");
const { authMiddle } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", authMiddle, allUsers);
router.post("/", registerUser);
router.post("/login", authUser);

module.exports = router;
