import React, { createContext, useState } from "react";
// import { getUser } from "../services/UserService";

const AuthContext = createContext({
  authData: null,
  setAuthData: null,
  getAuthData: null
});

export const AuthProvider = ({ children }) => {
  const [authContextValue, setAuthContextValue] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        authData: authContextValue,
        setAuthData: setAuthContextValue,
        getAuthData: () => {
          let userId = localStorage.getItem("userId");
          if (userId) {
            setAuthContextValue(userId);
            // setAuthContextValue(JSON.parse(userId));
          } else {
            //fetch
            setAuthContextValue("guest");
          }
        }
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
