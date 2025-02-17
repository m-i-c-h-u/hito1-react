import React from "react"
import "../App.css"

const ProfilePage = () => {
  const email = "correo.electronico@gmail.com";
  const handleLogout = () => {
    console.log("Cerrar sesión");
  };
  return (
    <div className="profile">
      <h2>Perfil</h2>
      <p>Email: {email}</p>
      <button onClick={handleLogout}>
        Cerrar sesión
      </button>
    </div>
  );
};
export default ProfilePage;