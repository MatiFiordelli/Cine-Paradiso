import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Logout = () => {
  const navigate = useNavigate();
  const { logout: auth0Logout } = useAuth0();

  const handleLogout = () => {
    // Borrar datos del sessionStorage y localStorage
    sessionStorage.clear();
    localStorage.clear();

    // Ejecutar la función de cierre de sesión de Auth0
    auth0Logout({ returnTo: window.location.origin });

    // Redirigir al usuario a la página de inicio
    navigate("/");
  };

  return (
    <a
      className="menu-link nav-link h6 text-light"
      data-text="Logout"
      title="Logout"
      onClick={handleLogout}
    >
      Logout
    </a>
  );
};

export default Logout;
