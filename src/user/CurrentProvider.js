import React, { createContext, useState } from "react";
import { getUser } from "../services/UserService";

const CurrentContext = createContext({
  current: {},
  setCurrent: null,
  fetchCurrent: null
});

const CurrentProvider = ({ children }) => {
  const [currentContextValue, setCurrentContextValue] = useState({});

  return (
    <CurrentContext.Provider
      value={{
        current: currentContextValue,
        setUsers: setCurrentContextValue,
        fetchCurrent: () => {
          getUser("jt").then((data) => {
            setCurrentContextValue(data);
          });
        }
      }}
    >
      {children}
    </CurrentContext.Provider>
  );
};
export default CurrentProvider;
