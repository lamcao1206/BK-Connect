import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ChatPage from "./pages/ChatPage";
import NavBar from "./components/NavBar";
import NotFound from "./pages/NotFound";
import ChatProvider, { ChatState } from "./context/ChatProvider";
import Welcome from "./pages/Welcome";

function ProtectedRoute({ children }) {
  // const { user } = ChatState();
  // check current user
  const user = localStorage.getItem("user");

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}
export default function App() {
  return (
    <ChatProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <ChatPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ChatProvider>
  );
}
