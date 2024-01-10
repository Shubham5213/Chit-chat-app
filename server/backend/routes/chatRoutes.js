const express = require("express");
const {
  accessChat,
  fetchChats,
  createGroupChat,
  removeFromGroup,
  addToGroup,
  renameGroup,
} = require("../controllers/chatControllers");
const { authMiddle } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddle, accessChat);
router.get("/", authMiddle, fetchChats);
router.post("/group", authMiddle, createGroupChat);
router.put("/rename", authMiddle, renameGroup);
router.put("/groupremove", authMiddle, removeFromGroup);
router.put("/groupadd", authMiddle, addToGroup);

module.exports = router;
