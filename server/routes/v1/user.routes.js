import express from "express";

import AccessController from "../../controllers/user.controller.js";
import uploadMiddleware from "../../middlewares/multer.middleware.js";
import authenMiddleware from "../../middlewares/auth.middleware.js";
import ImageController from "../../controllers/image.controller.js";

const route = express.Router();

route.get("/", (req, res) => {
  res.json({ message: "GET /api/v1 work well!" });
});

// Authen routes
route.post("/sign-up", uploadMiddleware.single("avatar"), AccessController.signUp);
route.post("/login", AccessController.login);

// Protected routes
route.get("/main", authenMiddleware, (req, res) => {
  console.log(req.user);
  res.json({ message: `Welcome back, ${req.user.username}` });
});

// Image service routes
route.get("/img/:username", ImageController.getImage);

export default route;
