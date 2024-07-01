//external imports
const express = require("express");
const { getLogin, login, logout } = require("../controller/loginController");
const decoratedHtmlResponse = require("../middlewares/common/decoratedHtmlResponse");
const {
  doLoginValidators,
  doLoginValidationHandler,
} = require("../middlewares/login/loginValidators");
const { redirectLoggedIn } = require("../middlewares/common/checkLogin");

const router = express.Router();

//set router tittle
const page_title = "login";

//login here
router.get("/", decoratedHtmlResponse(page_title), redirectLoggedIn, getLogin);

//process login
router.post(
  "/",
  decoratedHtmlResponse(page_title),
  doLoginValidators,
  doLoginValidationHandler,
  login
);

//logout
router.delete("/", logout);

module.exports = router;
