import express from "express";
import cors from "cors";
import accessRoute from "./routes/v1/access.routes.js";
import morgan from "morgan";
import initMongodb from "./db/init.mongodb.js";
import errorMiddleware from "./middleware/error.middleware.js";
import notFoundMiddleware from "./middleware/notFound.middleware.js";

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
app.use(notFoundMiddleware);

export default app;
