import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ChatPage from "./pages/ChatPage";
import NavBar from "./components/NavBar";
import NavBarChat from "./components/NavBarChat";
import NotFound from "./pages/NotFound";
import ChatProvider, { ChatState } from "./context/ChatProvider";

function ProtectedRoute({ children }) {
  const { user } = ChatState();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}
export default function App() {
  return (
    <ChatProvider>
      <ConditionalNavBar />
      <Routes>
        <Route path="/" element={<Login />} />
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

function ConditionalNavBar() {
  const location = useLocation();
  if (location.pathname === "/chat") {
    return <NavBarChat />;
  } else {
    return <NavBar />;
  }
}
