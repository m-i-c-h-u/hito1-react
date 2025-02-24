import { createContext, useState, useContext, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [email, setEmail] = useState(localStorage.getItem("email") || "");

  // Función para registrar un usuario
  const register = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        setToken(data.token);
        setEmail(data.email);
        localStorage.setItem("token", data.token);
        localStorage.setItem("email", data.email);
        return { success: true };
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Error en registro:", error);
      return { success: false, message: error.message };
    }
  };

  const login = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        setToken(data.token);
        setEmail(data.email);
        localStorage.setItem("token", data.token);
        localStorage.setItem("email", data.email);
        return { success: true };
      } else {
        return { success: false, message: data.message };

      }
    } catch (error) {
      console.error("Error en login:", error);
      return { success: false, message: error.message };
    }
  };

  // Función para cerrar sesión
  const logout = () => {
    setToken("");
    setEmail("");
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  // Función para obtener el perfil del usuario autenticado
  const getProfile = async () => {
    if (!token) return;
    
    try {
      const response = await fetch("http://localhost:5000/api/auth/me", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await response.json();
      if (response.ok) {
        setEmail(data.email);
      } else {
        logout();
      }
    } catch (error) {
      console.error("Error al obtener perfil:", error);
    }
  };

  useEffect(() => {
    if (token) {
      getProfile();
    }
  }, [token]);

  return (
    <UserContext.Provider value={{ token, email, login, register, logout }}>
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