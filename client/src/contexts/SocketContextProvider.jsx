import { createContext, useCallback, useContext, useState } from "react";
import initSocket from "../socket";

const SOCKET_STATE = {
  socket: null,
  socketId: null,
};

const SocketContext = createContext(SOCKET_STATE);

// eslint-disable-next-line react-refresh/only-export-components
export const useSocketContext = () => useContext(SocketContext);

export default function SocketContextProvider({ children }) {
  const [socketValue, setSocketValue] = useState(SOCKET_STATE);

  const socketConnect = useCallback(() => {
    return initSocket({ setSocketValue });
  }, []);

  return (
    <SocketContext.Provider value={{ socketConnect, socketValue, setSocketValue }}>{children}</SocketContext.Provider>
  );
}
