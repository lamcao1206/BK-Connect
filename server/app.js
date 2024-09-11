import express from "express";
import cors from "cors";
import morgan from "morgan";
import userRoute from "./routes/v1/user.routes.js";
import initMongoDB from "./utils/init.mongodb.js";
import { errorMiddleware, notFoundMiddleware } from "./middleware/error.middleware.js";

initMongoDB();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/test", (req, res) => {
  res.json({ message: "API work fine!" });
});

app.use("/api/v1", userRoute);

// Handle Error
app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
