import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import SignInForm from "./Login/SigInForm/index.jsx";

const AuthForm = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect();
  };

  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    if (isAuthenticated) {
      // Aquí puedes hacer lo que necesites con la información del usuario autenticado
      console.log("Usuario autenticado:", user);
    }
  }, [isAuthenticated, user]);

  return (
    <div className="container mt-5 mb-3">
      <div className="card bg-light shadow-lg p-4 rounded">
        {isAuthenticated ? (
          <button onClick={handleLogout}>Cerrar sesión</button>
        ) : (
          <SignInForm onLogin={handleLogin} />
        )}
      </div>
    </div>
  );
};

export default AuthForm;
