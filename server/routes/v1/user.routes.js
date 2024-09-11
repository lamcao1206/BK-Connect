import express from "express";

import AccessController from "../../controllers/user.controller.js";
import uploadMiddleware from "../../middleware/multer.middleware.js";
import authenMiddleware from "../../middleware/auth.middleware.js";

const route = express.Router();

route.get("/", (req, res) => {
  res.json({ message: "GET /api/v1 work well!" });
});

route.post("/sign-up", uploadMiddleware.single("avatar"), AccessController.signUp);
route.post("/login", AccessController.login);

route.get("/main", authenMiddleware, (req, res) => {
  console.log(req.user);
  res.json({ message: `Welcome back, ${req.user.username}` });
});

export default route;
