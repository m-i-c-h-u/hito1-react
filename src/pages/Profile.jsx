import React from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import "../App.css";

const ProfilePage = () => {
  const { email, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="profile">
      <h2>Perfil</h2>
      <p>Email: {email || "No disponible"}</p>
      <button onClick={handleLogout} className="btn btn-danger">
        Cerrar sesión
      </button>
    </div>
  );
};

export default ProfilePage;
