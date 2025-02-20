import { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true);

  const logout = () => {
    setToken(false);
  };

  return (
    <UserContext.Provider value={{ token, logout }}>
      {children}
    </UserContext.Provider>
  );
};


export const useUser = () => {
    const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser debe estar dentro de un UserProvider");
  }
  return context;
};
    
export default UserContext;