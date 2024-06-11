import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

// Declara las constantes domain y clientId aquí
const domain = "pabloelleproso.us.auth0.com";
const clientId = "GtB6P4KV7GX9I1G9h3xm79s5LV6Z4f6Q";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <BrowserRouter>
      {/* <React.StrictMode> */}
      <App />
      {/* </React.StrictMode> */}
    </BrowserRouter>
  </Auth0Provider>
);
