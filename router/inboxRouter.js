//external imports
const express = require("express");
const { getInbox } = require("../controller/inboxController");
const decoratedHtmlResponse = require("../middlewares/common/decoratedHtmlResponse");

const router = express.Router();

//login here
router.get("/", decoratedHtmlResponse("Index"), getInbox);

module.exports = router;
