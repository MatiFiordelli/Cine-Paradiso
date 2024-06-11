import React from "react";
import error401Image from "./src/assets/images/error401/error401jk.webp"

export default function Error401Section() {
  return (


    <section className="container-fluid w-100 d-flex flex-column justify-content-center align-items-center mb-3" style={{ minHeight: "100vh" }}>
      <div className="text-center">
        <img
          className="img-fluid"
          src={error401Image}
          alt="No estás autorizado a entrar a esta página"
          aria-label="Imagen que muestra que no estás autorizado a entrar a esta página"
          style={{ height: "25rem" }}
        />
      </div>
      <h3 className="mb-3">NO AUTORIZADO</h3>
    </section>
  );
}
