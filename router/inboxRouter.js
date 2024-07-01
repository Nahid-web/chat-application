//external imports
const express = require("express");
const { getInbox } = require("../controller/inboxController");
const decoratedHtmlResponse = require("../middlewares/common/decoratedHtmlResponse");
const { checkLogin } = require("../middlewares/common/checkLogin");

const router = express.Router();

//login here
router.get("/", decoratedHtmlResponse("Index"), checkLogin, getInbox);

module.exports = router;
