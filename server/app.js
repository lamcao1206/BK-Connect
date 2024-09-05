import express from "express";
import cors from "cors";
import accessRoute from "./routes/v1/access.routes.js";
import morgan from "morgan";
import initMongodb from "./db/init.mongodb.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", accessRoute);

app.get("/test", (req, res) => {
  res.json({ message: "API work fine!" });
});

export default app;
