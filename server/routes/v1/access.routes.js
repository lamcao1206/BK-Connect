import express from "express";
import AccessController from "../../controllers/access.controller.js";
import uploadMiddleware from "../../middleware/multer.middleware.js";
const route = express.Router();

route.get("/", (req, res) => {
  res.json({ message: "GET /api/v1 work well!" });
});

route.post("/sign-up", uploadMiddleware.single("avatar"), AccessController.signUp);
route.post("/login", AccessController.login);

export default route;
