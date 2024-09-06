import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ChatPage from "./pages/ChatPage";
import ProtectedRoute from "./components/ProtectedRoute";
import NavBar from "./components/NavBar";
import NavBarChat from "./components/NavBarChat";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <ConditionalNavBar />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <ChatPage />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

function ConditionalNavBar() {
  const location = useLocation();
  if (location.pathname === "/") {
    return <NavBarChat />;
  } else {
    return <NavBar />;
  }
}
