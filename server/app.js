import express from "express";
import cors from "cors";
import accessRoute from "./routes/v1/access.routes.js";
import morgan from "morgan";
import initMongodb from "./db/init.mongodb.js";
import session from "express-session";
const app = express();

app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET_KEY,
    cookie: { maxAge: 60000 },
  })
);

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", accessRoute);

app.get("/test", (req, res) => {
  res.json({ message: "API work fine!" });
});

export default app;
