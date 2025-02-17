import { useState } from 'react';

const RegisterForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formData;

    if (!email || !password || !confirmPassword) {
      setMessage('Todos los campos son obligatorios.');
      return;
    }

    if (password.length < 6) {
      setMessage('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    if (password !== confirmPassword) {
      setMessage('La contraseña y la confirmación deben coincidir.');
      return;
    }

    setMessage('Registro exitoso.');
    setFormData({ email: '', password: '', confirmPassword: '' });
  };

  return (
  <body className="register-body">
    <div className="register-container">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            placeholder="Introduce tu email"
          />
        </div>
        <div className="form-group">
          <label>Contraseña:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-control"
            placeholder="Introduce tu contraseña"
          />
        </div>
        <div className="form-group">
          <label>Confirmar Contraseña:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="form-control"
            placeholder="Confirma tu contraseña"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Registrarse
        </button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  </body>
  );
};

export default RegisterForm;
