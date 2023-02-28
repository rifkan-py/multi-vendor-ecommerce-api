import User from "../models/User.js";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";

export default class UserRepository {
  async create(user) {
    const savedUser = await User.create(user);
    return savedUser;
  }

  async findByEmail(email) {
    const user = await User.findOne({ email });
    return user;
  }
}

export class HashService {
  async hashPassword(password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
  }

  async comparePasswords(password, hashedPassword) {
    const isPasswordValid = await bcrypt.compare(password, hashedPassword);
    return isPasswordValid;
  }
}

export class TokenService {
  async generateToken(user) {
    const token = JWT.sign(user, process.env.JWT_SECRET);
    return token;
  }
}
