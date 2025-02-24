import { useState } from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const { register } = useUser();
  const [formData, setFormData] = useState({ email: "", password: "", confirmPassword: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formData;

    if (!email || !password || !confirmPassword) {
      setMessage("Todos los campos son obligatorios.");
      return;
    }

    if (password.length < 6) {
      setMessage("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Las contraseñas no coinciden.");
      return;
    }

    console.log("🔄 Registrando usuario...");
    const result = await register(email, password);
  
    if (result.success) {
      setMessage("✅ Registro exitoso. Redirigiendo al Home...");
      console.log("🚀 Redirigiendo a /home...");
  
      setTimeout(() => {
        navigate("/");  // ✅ Ahora redirige al Home
      }, 100);
    } else {
      setMessage(result.message || "❌ Error en el registro.");
    }
  };


  return (
    <body className="register-body">
      <div className="register-container">
        <h2>Registro</h2>
        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" />
          </div>
          <div className="form-group">
            <label>Contraseña:</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-control" />
          </div>
          <div className="form-group">
            <label>Confirmar Contraseña:</label>
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary">Registrarse</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </body>
  );
};

export default RegisterForm;
