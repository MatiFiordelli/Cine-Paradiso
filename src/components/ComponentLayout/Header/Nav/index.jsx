import React, { useEffect, useState } from "react";
import pathroutes from "../../../../helpers/pathroutes.js";
import { useAuth0 } from "@auth0/auth0-react";
import Logout from "../../../LoginComponents/Logout/index.jsx";
import Login from "../../../LoginComponents/Login/SigInForm/index.jsx";
import "./index.css";
import Swal from "sweetalert2";

export default function Nav({ headerHeight }) {
  const { isAuthenticated, user } = useAuth0();
  const [profilePicture, setProfilePicture] = useState("");

  useEffect(() => {
    const isUserAuthenticated =
      localStorage.getItem("isUserAuthenticated") === "true";
    if (isAuthenticated && !isUserAuthenticated) {
      Swal.fire({
        title: `¡Bienvenido, ${user.name}!`,
        text: "¡Gracias por iniciar sesión!",
        imageUrl: user.picture,
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: "Profile Picture",
        confirmButtonText: "Cerrar",
      });
      localStorage.setItem("isUserAuthenticated", "true");
    }
  }, [isAuthenticated, user]);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light z-2 bg-transparent py-2 pe-5"
      style={{ height: `${headerHeight}` }}
    >
      <div className="container justify-content-end">
        <button
          className="navbar-toggler shadow-none border-1 border-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="ul-navbar navbar-nav mb-2 mb-lg-0 mx-1 gap-3 bg-transparent">
            <li className="nav-item">
              <a
                className="menu-link nav-link active h6 text-light"
                href="/"
                data-text="Home"
                title="Home"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="menu-link nav-link h6 text-light"
                href="/#cartelera"
                data-text="Cartelera"
                title="Cartelera"
              >
                Cartelera
              </a>
            </li>
            <li className="nav-item">
              <a
                className="menu-link nav-link h6 text-light"
                href="/#proximamente"
                data-text="Próximamente"
                title="Proximamente"
              >
                Próximamente
              </a>
            </li>
            <li className="nav-item">
              <a
                className="menu-link nav-link h6 text-light"
                href={pathroutes.contact}
                data-text="Contacto"
                title="Contacto"
              >
                Contacto
              </a>
            </li>
            <li className="nav-item">
              <a
                className="menu-link nav-link h6 text-light"
                href={pathroutes.about_us}
                data-text="Nosotros"
                title="Nosotros"
              >
                Nosotros
              </a>
            </li>
            <li className="nav-item">
              <a
                className="menu-link nav-link h6 text-light"
                href={pathroutes.prices}
                data-text="Precios"
                title="Precios"
              >
                Precios
              </a>
            </li>
            {isAuthenticated ? (
              <>
                <li className="nav-item ms-lg-3 ms-0">
                  <Logout />
                </li>
              </>
            ) : (
              <li className="nav-item ms-lg-3 ms-0">
                <Login />
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
