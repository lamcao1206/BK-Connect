import { io } from "socket.io-client";

export default function initSocket({ setSocketValue }) {
  const socket = io("http://localhost:3000");

  // Set Socket Object
  setSocketValue((prev) => ({ ...prev, socket }));

  // Set Socket Context Id
  socket.on("connect", () => {
    setSocketValue((prev) => ({ ...prev, socketId: socket.id }));
  });

  // Set online users in case someone active
  socket.on("ONLINE_USER_CHANGE", (onlineUsers) => {
    setSocketValue((prev) => ({ ...prev, onlineUsers }));
  });
}
