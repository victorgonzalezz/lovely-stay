import React, { useState, createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [gitHubUser, setGitHubUser] = useState(null);

 const handleGitHubUser = (data) => {
  setGitHubUser(data)
 }

  return (
    <AppContext.Provider value={{ gitHubUser, handleGitHubUser }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;