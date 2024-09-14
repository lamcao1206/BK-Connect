import ImageService from "../services/image.service.js";
import path from "node:path";

export default class ImageController {
  static getImage = async (req, res, next) => {
    const { username } = req.params;
    try {
      const imagePath = await ImageService.getImagePath(username);
      const data = await ImageService.readImage(imagePath);
      const ext = path.extname(imagePath).toLowerCase();
      let contentType = "image/jpeg";

      if (ext === ".png") {
        contentType = "image/png";
      }
      res.setHeader("Content-Type", contentType);
      res.send(data);
    } catch (err) {
      let error = new Error(err.message);
      error.statusCode = 404;
      next(err);
    }
  };
}
