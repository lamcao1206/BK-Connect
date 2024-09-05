import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ChatPage from "./pages/ChatPage";
import NavBar from "./components/NavBar";
import NavBarChat from "./components/NavBarChat";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <ConditionalNavBar />
      <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

function ConditionalNavBar() {
  const location = useLocation();
  if (location.pathname === "/login" || location.pathname === "/sign-up") {
    return <NavBar />;
  } else {
    return <NavBarChat />;
  }
}
