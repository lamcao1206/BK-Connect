import User from "../models/user.model.js";
import handleError from "../utils/error.handle.js";

class AccessController {
  static signUp = async (req, res) => {
    const { username, email, password } = req.body;
    const avatar = req.file ? req.file.filename : "default-avatar.png";
    try {
      const createdUser = await User.create({ username, email, password, avatar });
      res.status(201).json(createdUser);
    } catch (err) {
      const errors = handleError(err);
      res.status(400).json({ errors });
    }
  };
}

export default AccessController;
