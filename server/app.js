import express from "express";
import cors from "cors";
import morgan from "morgan";
import accessRoute from "./routes/v1/access.routes.js";
import initMongodb from "./db/init.mongodb.js";
import { errorMiddleware, notFoundMiddleware } from "./middleware/error.middleware.js";

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

app.use("/api/v1", accessRoute);

// Handle Error
app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
