import UserService from "../services/user.service.js";

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
      const result = await UserService.signUp(username, email, password, avatar);
      res.status(201).json(result);
    } catch (err) {
      next(err);
    }
  };

  static login = async (req, res, next) => {
    const { username, password } = req.body;
    try {
      const result = await UserService.login(username, password);
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  };
}

export default UserController;
