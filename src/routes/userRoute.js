import express from "express";

import UserController from "../controllers/UserController.js";
import UserRepository, {
  HashService,
  TokenService,
} from "../repositories/UserRepository.js";

import UserService from "../services/UserService.js";

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

export default router;
