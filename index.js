import app from "./server/app.js";

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server is listening on port", port);
});

process.on("SIGINT", () => {
  console.log("Server is closing");
  process.exit(0);
});
