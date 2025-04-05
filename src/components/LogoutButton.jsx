function LogoutButton() {
    const handleLogout = () => {
    localStorage.removeItem("token");     
    window.location.reload(); 
  };

  return <button onClick={handleLogout}>Cerrar Sesión</button>;
}

export default LogoutButton;