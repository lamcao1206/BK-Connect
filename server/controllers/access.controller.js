import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
class AccessController {
  static signUp = async (req, res, next) => {
    const { username, email, password } = req.body;
    const avatar = req.file ? req.file.filename : "default-avatar.png";
    try {
      const createdUser = await User.create({ username, email, password, avatar });
      res.status(201).json(createdUser);
    } catch (err) {
      // const errors = handleError(err);
      // res.status(400).json({ errors });
      next(err);
    }
  };

  static login = async (req, res, next) => {
    const { username, password } = req.body;
    console.log(req.body);
    try {
      const targetUser = await User.findOne({ username });
      if (!targetUser) {
        return res.status(401).json({ message: "Invalid username" });
      }

      const isPasswordValid = await bcrypt.compare(password, targetUser.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Wrong password" });
      }
      console.log("Done");

      // Store user information in session
      req.session.user = {
        id: targetUser._id,
        username: targetUser.username,
        email: targetUser.email,
        avatar: targetUser.avatar,
      };

      res.status(201).json({ message: "Login successful", user: req.session.user });
    } catch (err) {
      next(err);
      // console.log(err);
      // const errors = handleError(err);
      // res.status(500).json({ errors });
    }
  };
}

export default AccessController;
