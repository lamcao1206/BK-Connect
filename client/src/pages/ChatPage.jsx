import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export default function ChatPage() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      setUsername(decodedToken.username);
    }
  }, []);

  return (
    <div className="bg-teal-100 h-screen flex items-center justify-center">
      <h1 className="text-5xl">Welcome back, {username}</h1>
    </div>
  );
}
