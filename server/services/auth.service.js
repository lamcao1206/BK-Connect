import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

class AuthService {
  static genToken(user) {
    return jwt.sign(
      {
        id: user._id,
        username: user.username,
        email: user.email,
        avatar: user.avatar,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );
  }

  static login = async (username, password) => {
    try {
      const user = await User.findOne({ username });

      // User not exists
      if (!user) {
        const error = new Error(`${username} is not found`);
        error.statusCode = 404;
        throw error;
      }

      // Wrong password
      const isPasswordValid = await user.comparePassword(password);
      if (!isPasswordValid) {
        const error = new Error("Wrong password");
        error.statusCode = 401;
        throw error;
      }

      const token = AuthService.genToken(user);
      return token;
    } catch (error) {
      throw error;
    }
  };

  static signUp = async (username, email, password, avatar) => {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({ username, email, password: hashedPassword, avatar });
      const token = AuthService.genToken(newUser);
      return token;
    } catch (err) {
      throw err;
    }
  };

  static verifyToken(token) {
    return jwt.verify(token, process.env.JWT_SECRET_KEY);
  }
}

export default AuthService;
