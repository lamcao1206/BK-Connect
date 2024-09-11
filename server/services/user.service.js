import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

class UserService {
  static genToken(user) {
    const payload = {
      _id: user._id,
      username: user.username,
      emai: user.email,
      avatar: user.avatar,
    };
    return jwt.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });
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

      return {
        _id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        token: UserService.genToken(user),
      };
    } catch (err) {
      throw err;
    }
  };

  static signUp = async (username, email, password, avatar) => {
    try {
      const newUser = await User.create({ username, email, password, avatar });
      return {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        avatar: newUser.avatar,
        token: UserService.genToken(newUser),
      };
    } catch (err) {
      throw err;
    }
  };

  static verifyToken(token) {
    return jwt.verify(token, process.env.JWT_SECRET_KEY);
  }

  static findAll(userId) {}
}

export default UserService;
