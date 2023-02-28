const User = require("../models/User.js");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");

class UserRepository {
  async create(user) {
    const savedUser = await User.create(user);
    return savedUser;
  }

  async findByEmail(email) {
    const user = await User.findOne({ email });
    return user;
  }
}

class HashService {
  async hashPassword(password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
  }

  async comparePasswords(password, hashedPassword) {
    const isPasswordValid = await bcrypt.compare(password, hashedPassword);
    return isPasswordValid;
  }
}

class TokenService {
  async generateToken(user) {
    const token = JWT.sign(user, process.env.JWT_SECRET);
    return token;
  }
}

module.exports = { UserRepository, HashService, TokenService };
