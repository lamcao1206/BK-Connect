import express from "express";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: [process.env.CLIENT_PROXY || "http://localhost:5073"],
  })
);

app.get("/", (req, res) => {
  res.send("Hello, World");
});

export default app;
