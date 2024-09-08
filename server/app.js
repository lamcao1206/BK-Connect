import express from "express";
import cors from "cors";
import morgan from "morgan";
import http from "http";
import accessRoute from "./routes/v1/access.routes.js";
import initMongodb from "./db/init.mongodb.js";
import errorMiddleware from "./middleware/error.middleware.js";

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

// Handle catched error
app.use(errorMiddleware);

// Handle not found error
app.use((req, res, next) => {
  return res.status(404).json({ message: "Resource not found" });
});

export default app;
