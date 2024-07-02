//external imports
const express = require("express");

//internal imports
const {
  getInbox,
  searchUser,
  addConversation,
  getMessages,
} = require("../controller/inboxController");
const decoratedHtmlResponse = require("../middlewares/common/decoratedHtmlResponse");
const { checkLogin } = require("../middlewares/common/checkLogin");

const router = express.Router();

//inbox page
router.get("/", decoratedHtmlResponse("Index"), checkLogin, getInbox);

//search user for conversion
router.post("/search", checkLogin, searchUser);

//add conversation
router.post("/conversation", checkLogin, addConversation);

//get messages of a conversation
router.get("/message/:conversation_id", checkLogin, getMessages);

module.exports = router;
