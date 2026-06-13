import { createContext, useContext, useState } from "react";
import { BACKEND_URL } from "../utils/authConstants";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const storedToken = localStorage.getItem("token");

  const [token, setToken] = useState(storedToken || "");
  const [user, setUser] = useState(null);

  const login = (userData, jwtToken) => {
    setUser(userData || null);
    setToken(jwtToken);

    localStorage.setItem("token", jwtToken);
  };

  const logout = () => {
    setUser(null);
    setToken("");

    localStorage.removeItem("token");
  };

  const isAdmin = !!token;

  return (
    <AuthContext.Provider
      value={{
        backendUrl: BACKEND_URL,
        user,
        token,
        isAdmin,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);