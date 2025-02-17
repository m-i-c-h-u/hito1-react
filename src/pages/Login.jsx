import { useState } from 'react';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      setMessage('Todos los campos son obligatorios.');
      return;
    }

    if (password.length < 6) {
      setMessage('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    setMessage('Inicio de sesión exitoso.');
  };

  return (
    <body className="login-body">
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} className="login-form">
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
        <button type="submit" className="btn btn-primary">
          Iniciar Sesión
        </button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
    </body>
  );
};

export default LoginPage;
