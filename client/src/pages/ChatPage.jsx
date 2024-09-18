// import { useEffect, useState } from "react";
import ChatFeed from "../components/Chat/ChatFeed";
import ChatMessage from "../components/Chat/ChatMessage";
// import { useAuthContext } from "../contexts/AuthProvider";

export default function ChatPage() {
  // const { user, token } = useAuthContext();
  // const [socket, setSocket] = useState(null);

  // useEffect(() => {
  //   if (!user || !token) {=
  //     return;
  //   }

  //   const newSocket = io("http://localhost:3000");
  //   setSocket(newSocket);

  //   newSocket.on("connect", () => {
  //     console.log("Connected to server");
  //     newSocket.emit("user_connected", user);
  //   });

  //   newSocket.on("disconnect", () => {
  //     console.log("Disconnected from server");
  //   });

  //   return () => {
  //     newSocket.close();
  //   };
  // }, [user, token]);

  return (
    <div
      className="bg-cover bg-center bg-no-repeat flex items-center justify-center h-screen mt-[30px] gap-4"
      style={{
        backgroundImage: "url('/background.jpg')",
      }}
    >
      <ChatFeed />
      <ChatMessage />
    </div>
  );
}
