import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const AuthContext = createContext(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => useContext(AuthContext);

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useLocalStorage(null, "user");
  const [token, setToken] = useLocalStorage(null, "token");

  return <AuthContext.Provider value={{ user, setUser, token, setToken }}>{children}</AuthContext.Provider>;
}
