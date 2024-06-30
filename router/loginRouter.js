//external imports
const express = require("express");
const { getLogin } = require("../controller/loginController");
const decoratedHtmlResponse = require("../middlewares/common/decoratedHtmlResponse");

const router = express.Router();

//login here
router.get("/", decoratedHtmlResponse("Login"), getLogin);

module.exports = router;
