import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ChatPage from "./pages/ChatPage";
import NavBar from "./components/NavBar";
import NotFound from "./pages/NotFound";
import Welcome from "./pages/Welcome";
import { useAuthContext } from "./contexts/AuthProvider";

function ProtectedRoute({ children }) {
  const user = localStorage.getItem("user");

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}
export default function App() {
  const { user } = useAuthContext();
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
