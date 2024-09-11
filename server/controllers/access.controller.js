import User from "../models/user.model.js";
import AuthService from "../services/auth.service.js";

class AccessController {
  static signUp = async (req, res, next) => {
    const { username, email, password } = req.body;
    const avatar = req.file ? req.file.filename : "default-avatar.png";

    // Not entered all fields
    if (!username || !email || !password) {
      let err = new Error("Please enter all fields");
      err.statusCode = 400;
      throw err;
    }

    try {
      const result = await AuthService.signUp(username, email, password, avatar);
      res.status(201).json(result);
    } catch (err) {
      next(err);
    }
  };

  static login = async (req, res, next) => {
    const { username, password } = req.body;
    try {
      const result = await AuthService.login(username, password);
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  };
}

export default AccessController;
