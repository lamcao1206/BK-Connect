import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ChatPage from "./pages/ChatPage";
import NavBar from "./components/Others/NavBar";
import NotFound from "./pages/NotFound";
import Welcome from "./pages/Welcome";
import { useAuthContext } from "./contexts/AuthProvider";
import { useSocketContext } from "./contexts/SocketProvider";
import { useEffect } from "react";

export default function App() {
  const { user } = useAuthContext();
  const {
    socketConnect,
    socketValue: { socket, socketId },
  } = useSocketContext();

  // Init socket if not exist
  useEffect(
    function () {
      if (user && !socketId) {
        socketConnect();
      }
    },
    [user, socketId, socketConnect]
  );

  // Emit USER_ONLINE event for notifying the online of user
  useEffect(
    function () {
      if (user && socketId) {
        socket.emit("USER_ONLINE", user._id, socketId);
        console.log("connected");
      }
    },
    [user, socketId, socket]
  );

  // Emit USER_OFFLINE event when the user closes or navigates away from the browser
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (user && socketId) {
        socket.emit("USER_OFFLINE", user._id);
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [user, socketId, socket]);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={user ? <Navigate to="/chat" replace={true} /> : <Login />} />
        <Route path="/sign-up" element={user ? <Navigate to="/chat" replace={true} /> : <SignUp />} />
        <Route path="/chat" element={user ? <ChatPage /> : <Navigate to="/" replace={true} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
