import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import pathroutes from "../../helpers/pathroutes.js";

const AuthRoute = ({ element, ...rest }) => {
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    // Si el usuario no está autenticado, redirige a la página de error 401
    return <Navigate to={pathroutes.error401} />;
  }

  // Si el usuario está autenticado, renderiza el elemento de ruta normalmente
  return <Route {...rest} element={element} />;
};

export default AuthRoute;
