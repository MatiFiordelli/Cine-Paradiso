import React from "react";
import ErrorImage from "../../../assets/images/error404/error404.webp";

export default function Error404Component() {
  return (
    <section className="container-fluid d-flex flex-column justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <h2 className="h1 text-center mb-3">Error 404</h2>
      <div className="text-center">
        <img
          src={ErrorImage}
          alt="Error 404"
          title="Imagen de proyector roto de error 404"
          className="img-fluid"
          style={{ height: "15rem" }}
          aria-label="Página no encontrada. Por favor, verifica la URL o inténtalo de nuevo más tarde."
        />
      </div>
      <p className="h5 text-center mb-3">La página que buscas no existe</p>
    </section>
  );

}
