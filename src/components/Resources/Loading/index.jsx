import React from "react";

const LoadingAnimation = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }} // Se ajusta la altura a la altura de la ventana
    >
      <div
        className="spinner-border text-primary"
        role="status"
        style={{ width: "5rem", height: "5rem" }}
      >
        <span className="visually-hidden">Cargando...</span>{" "}
      </div>
    </div>
  );
};

export default LoadingAnimation;
