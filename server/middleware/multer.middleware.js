import multer from "multer";
import path from "node:path";

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, path.join(process.cwd(), "uploads", "img", "avatar"));
  },
  filename: function (req, file, callback) {
    const username = req.body.username;
    callback(null, `${username}.icon${path.extname(file.originalname)}`);
  },
});

export default multer({ storage: storage });
