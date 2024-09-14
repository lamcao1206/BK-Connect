import User from "../models/user.model.js";
import path, { resolve } from "node:path";
import fs from "node:fs/promises";

export default class ImageService {
  static async getImagePath(username) {
    try {
      const user = await User.findOne({ username });
      console.log(user);
      if (!user || !user.avatar) {
        throw new Error("User or avatar not found");
      }
      const imagePath = path.resolve("uploads", "img", "avatar", user.avatar);
      console.log(imagePath);
      try {
        await fs.access(imagePath);
      } catch (err) {
        throw new Error("Image file not found");
      }
      return imagePath;
    } catch (err) {
      throw err;
    }
  }

  static async readImage(imagePath) {
    try {
      const data = await fs.readFile(imagePath);
      return data;
    } catch (err) {
      throw err;
    }
  }
}
