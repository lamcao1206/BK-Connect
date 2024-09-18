import http from "http";
import { Server } from "socket.io";
import app from "./server/app.js";
import initSocket from "./server/socket/index.js";

const port = process.env.PORT || 3000;
const server = http.createServer(app);

initSocket(server, { origin: "http://localhost:5173", credentials: true });

server.listen(port, () => {
  console.log("Server is listening on port", port);
});

process.on("SIGINT", () => {
  console.log("Server is closing");
  process.exit(0);
});
