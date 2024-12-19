import { createContext, useContext, useState } from "react";

// Create the context
export const AuthContext = createContext();

// AuthContextProvider component
export const AuthContextProvider = ({ children }) => {
  // Check if user info exists in localStorage, otherwise default to null
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("chat-user")) || null  );

  // Providing the context value to child components
  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuthContext = () => {
  return useContext(AuthContext);
};
