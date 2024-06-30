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

const router = express.Router();

//users page
router.get("/", decoratedHtmlResponse("Users"), getUsers);

//add user
router.post(
  "/",
  avatarUpload,
  addUserValidators,
  addUserValidatorHandler,
  addUser
);

//remove user
router.delete("/:id", removeUser);

module.exports = router;
