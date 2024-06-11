import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuth0 } from "@auth0/auth0-react";

export default function SignInForm() {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isAuthenticated && user) {
      const userData = {
        name: user.name,
        email: user.email,
        picture: user.picture,
      };
      sessionStorage.setItem("userData", JSON.stringify(userData));

      // Redireccionar al usuario después de iniciar sesión
      const returnUrl = sessionStorage.getItem("returnUrl");
      if (returnUrl) {
        sessionStorage.removeItem("returnUrl");
        navigate(returnUrl);
      } else {
        navigate("/");
      }
    }
  }, [isAuthenticated, user, navigate]);

  const handleLoginWithAuth0 = async () => {
    try {
      // Almacenar la ubicación actual antes de iniciar sesión
      sessionStorage.setItem("returnUrl", location.pathname);

      // Iniciar sesión con Auth0
      await loginWithRedirect();
    } catch (error) {
      setError("Error al iniciar sesión con Auth0.");
      Swal.fire({
        icon: "error",
        title: "Error al iniciar sesión",
        text: "No se pudo iniciar sesión con Auth0.",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Cerrar",
      });
      console.error("Error:", error);
    }
  };

  return (
    <a
      className="menu-link nav-link h6 text-light"
      data-text="Login"
      title="Login"
      onClick={handleLoginWithAuth0}
    >
      Login
    </a>
  );
}
