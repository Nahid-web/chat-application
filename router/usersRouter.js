//external imports
const express = require("express");
const {
  getUsers,
  addUser,
  removeUser,
} = require("../controller/usersController");
const decoratedHtmlResponse = require("../middlewares/common/decoratedHtmlResponse");
const avatarUpload = require("../middlewares/user/avatarUpload");
const {
  addUserValidators,
  addUserValidatorHandler,
} = require("../middlewares/user/userValidators");
const { checkLogin } = require("../middlewares/common/checkLogin");

const router = express.Router();

//users page
router.get("/", decoratedHtmlResponse("Users"), checkLogin, getUsers);

//add user
router.post(
  "/",
  checkLogin,
  avatarUpload,
  addUserValidators,
  addUserValidatorHandler,
  addUser
);

//remove user
router.delete("/:id", removeUser);

module.exports = router;
