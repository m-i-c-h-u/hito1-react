import { useState } from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom"; // 💡 Importar navigate

const LoginPage = () => {
  const { login } = useUser();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // 💡 Asegurar que navigate está aquí

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
  
    if (!email || !password) {
      setMessage("Todos los campos son obligatorios.");
      return;
    }
  
    if (password.length < 6) {
      setMessage("La contraseña debe tener al menos 6 caracteres.");
      return;
    }
  
    console.log("🔄 Enviando login...");
    const result = await login(email, password);
  
    if (result.success) {
      setMessage("✅ Inicio de sesión exitoso. Redirigiendo al Perfil...");
      console.log("🚀 Redirigiendo a /profile...");
  
      setTimeout(() => {
        navigate("/profile");  // ✅ Ahora redirige al Perfil
      }, 100);
    } else {
      setMessage(result.message || "❌ Error en inicio de sesión.");
    }
  };
  

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Contraseña:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default LoginPage;