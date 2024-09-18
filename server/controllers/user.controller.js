import User from "../models/user.model.js";
import { generateToken } from "../utils/jwt.utils.js";

class UserController {
  static signUp = async (req, res, next) => {
    const { username, email, password } = req.body;
    const avatar = req.file ? req.file.filename : "default-avatar.png";

    try {
      // Not entered all fields
      if (!username || !email || !password) {
        let err = new Error("Please enter all fields");
        err.statusCode = 400;
        throw err;
      }

      const newUser = await User.create({ username, email, password, avatar });

      res.status(201).json({
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        avatar: newUser.avatar,
        token: generateToken(newUser),
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  };

  static login = async (req, res, next) => {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ username });

      // User not exist
      if (!user) {
        const error = new Error(`${username} is not found`);
        error.statusCode = 404;
        throw error;
      }

      // Wrong password
      const isPasswordValid = await user.comparePassword(password);
      if (!isPasswordValid) {
        const error = new Error("Wrong password");
        error.statusCode = 403;
        throw error;
      }

      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        token: generateToken(user),
      });
    } catch (err) {
      next(err);
    }
  };
}

export default UserController;
