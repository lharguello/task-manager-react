import { useState } from "react";
import api from "../services/axiosConfig";
import RegisterForm from "./RegisterForm";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showRegister, setShowRegister] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await api.post("https://localhost:7291/api/auth/login", { email, password });
      localStorage.setItem("token", response.data.token);
      window.location.reload();
    } catch (err) {
      setError("Credenciales incorrectas. Inténtalo de nuevo.");
    }
  };

  return (
    <div>
      {showRegister ? (
        <RegisterForm setShowRegister={setShowRegister} />
      ) : (
        <form onSubmit={handleLogin}>
          <h2>Iniciar Sesión</h2>
          <input 
            type="email" 
            placeholder="Correo electrónico" 
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
          <button type="submit">Iniciar Sesión</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
            
          <p>
            ¿No tienes cuenta?{" "}
            <span 
              style={{ color: "blue", cursor: "pointer" }} 
              onClick={() => setShowRegister(true)}
            >
              Registrarse
            </span>
          </p>
        </form>
      )}
    </div>
  );
}

export default LoginForm;