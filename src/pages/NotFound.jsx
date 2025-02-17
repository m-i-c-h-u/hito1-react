import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const NotFound = () => {
  return (
    <div className="not-found">
        <img className="error" src="../src/assets/img/error.webp" alt="" />
      <h1>Error 404 <br/> no deberías estar aquí</h1>
      <p>¡Ay! Me pillaste a punto de comer... ehh creo que te perdiste, pero no te preocupes haz click en el link y volverás al inicio</p>
      <Link to="/" className="home-link">Bye bye!</Link>
    </div>
  );
};
export default NotFound;