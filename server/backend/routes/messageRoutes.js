const express = require("express");
const {
  allMessages,
  sendMessage,
} = require("../controllers/messageControllers");
const { authMiddle } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddle, sendMessage);
router.get("/:chatId", authMiddle, allMessages);

module.exports = router;
