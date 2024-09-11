import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const ChatContext = createContext();

export const ChatState = () => {
  return useContext(ChatContext);
};

export default function ChatProvider({ children }) {
  const [user, setUser] = useState(null);
  const [chats, setChats] = useState(null);
  const [notification, setNotification] = useState(null);
  const [selectedChat, setSelectedChat] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const userToken = localStorage.getItem("user");
    if (!userToken) {
      return;
    } else {
      setUser(jwtDecode(userToken));
    }
  }, [navigate]);

  return (
    <ChatContext.Provider
      value={{
        user,
        setUser,
        chats,
        setChats,
        notification,
        setNotification,
        selectedChat,
        setSelectedChat,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}
