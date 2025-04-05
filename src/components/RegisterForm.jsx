import { useState } from "react";
import api from "../services/axiosConfig";

function RegisterForm({ setShowRegister }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!name.trim() || !email.trim() || !password.trim()) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    try {
      await api.post("https://localhost:7291/api/auth/register", { name, email, password });
      setSuccess("Registro exitoso. Ahora puedes iniciar sesión.");
      setTimeout(() => setShowRegister(false), 2000);
    } catch (err) {
      setError("Error al registrar usuario. Inténtalo de nuevo.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <h2>Registro de Usuario</h2>
      <input 
        type="text" 
        placeholder="Nombre" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required
      />
      <input 
        type="email" 
        placeholder="Correo Electrónico" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required
      />
      <input 
        type="password" 
        placeholder="Contraseña" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        required
      />
      <button type="submit">Registrarse</button>
      
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}

      <p>
        ¿Ya tienes cuenta?{" "}
        <span 
          style={{ color: "blue", cursor: "pointer" }} 
          onClick={() => setShowRegister(false)}
        >
          Iniciar Sesión
        </span>
      </p>
    </form>
  );
}

export default RegisterForm;
