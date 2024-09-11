import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { io } from "socket.io-client";
import UserPanel from "../components/UserPanel";

export default function ChatPage() {
  const [username, setUsername] = useState("");
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      setUsername(decodedToken.username);
    }

    const newSocket = io("http://localhost:3000");
    setSocket(newSocket);

    newSocket.on("connect", () => {
      console.log("Connected to server");
      newSocket.emit("user_connected", { username });
    });

    newSocket.on("disconnect", () => {
      console.log("Disconnected from server");
    });

    return () => {
      newSocket.close();
    };
  }, [username]);

  return (
    <div className="bg-teal-100 h-screen flex items-center justify-center flex-col">
      <h1 className="text-5xl">Welcome back, {username}</h1>
      <UserPanel />
    </div>
  );
}
