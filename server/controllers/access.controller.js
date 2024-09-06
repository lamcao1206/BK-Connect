import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import AuthService from "../services/auth.service.js";

class AccessController {
  static signUp = async (req, res, next) => {
    const { username, email, password } = req.body;
    const avatar = req.file ? req.file.filename : "default-avatar.png";
    try {
      const token = await AuthService.signUp(username, email, password, avatar);
      res.status(201).json({ token });
    } catch (err) {
      next(err);
    }
  };

  static login = async (req, res, next) => {
    const { username, password } = req.body;
    try {
      const token = await AuthService.login(username, password);
      res.status(200).json({ token, message: "Login successful" });
    } catch (err) {
      console.log(err);
      next(err);
    }
  };
}

export default AccessController;
