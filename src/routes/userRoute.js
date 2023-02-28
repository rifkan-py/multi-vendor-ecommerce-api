const express = require("express");

const UserController = require("../controllers/UserController.js");
const {
  HashService,
  TokenService,
  UserRepository,
} = require("../repositories/UserRepository.js");

const UserService = require("../services/UserService.js");

const userRepository = new UserRepository();
const hashService = new HashService();
const tokenService = new TokenService();

const userService = new UserService(userRepository, hashService, tokenService);

const userController = new UserController(userService);

const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);

// eslint-disable-next-line no-unused-vars
router.post("/test", (req, res, _) => {
  res.json("route working");
});

module.exports = router;
