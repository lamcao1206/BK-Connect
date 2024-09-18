import { Server } from "socket.io";

export default function initSocket(server, corsOption) {
  const io = new Server(server, { cors: corsOption });

  // Storing the current online users
  let onlineUsers = [];

  io.on("connection", (socket) => {
    socket.on("USER_ONLINE", (userId, socketId) => {
      let userExisted = onlineUsers.some((user) => user.userId === userId);
      let prevSocketId = userExisted?.socketId || null;

      if (userExisted && prevSocketId !== socketId) {
        // Refresh new socket id
        onlineUsers = onlineUsers.map((user) => {
          return user.userId === userId ? { ...user, socketId: socketId } : user;
        });
      } else if (!userExisted) {
        // New users login
        onlineUsers.push({ userId, socketId });
        io.emit("ONLINE_USER_CHANGE", onlineUsers);
      }
    });

    socket.on("USER_OFFLINE", (offlineUserId) => {
      onlineUsers = onlineUsers.filter((user) => user.userId !== offlineUserId);
      io.emit("ONLINE_USER_CHANGE", onlineUsers);
    });
  });
}
