import { createContext, useState, useContext } from "react";

const ChatContext = createContext();

export const ChatState = () => {
  return useContext(ChatContext);
};

export default function ChatProvider({ children }) {
  const [user, setUser] = useState(null);
  const [chats, setChats] = useState(null);
  const [notification, setNotification] = useState(null);
  const [selectedChat, setSelectedChat] = useState(null);

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
