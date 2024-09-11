import http from "http";
import { Server } from "socket.io";
import app from "./server/app.js";

const port = process.env.PORT || 3000;
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("Connected to Socket.io");

  socket.on("user_connected", (data) => {
    console.log(`${data.username} connected!`);
  });

  socket.off("setup", () => {
    console.log("User disconnected");
  });
});

server.listen(port, () => {
  console.log("Server is listening on port", port);
});

process.on("SIGINT", () => {
  console.log("Server is closing");
  process.exit(0);
});
