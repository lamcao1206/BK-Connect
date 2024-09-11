import http from "http";
import { Server } from "socket.io";
import app from "./server/app.js";

const port = process.env.PORT || 3000;
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("example_event", (data) => {
    console.log("example_event received:", data);
  });
  socket.on("user_connected", (data) => {
    console.log(`${data.username} connected!`);
  });
});

server.listen(port, () => {
  console.log("Server is listening on port", port);
});

process.on("SIGINT", () => {
  console.log("Server is closing");
  process.exit(0);
});
