//external imports
const express = require("express");
const { getUsers } = require("../controller/usersController");
const decoratedHtmlResponse = require("../middlewares/decoratedHtmlResponse");

const router = express.Router();

//users here
router.get("/", decoratedHtmlResponse("Users"), getUsers);

module.exports = router;
