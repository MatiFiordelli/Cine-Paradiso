import React, { useState, useEffect } from "react";
import FadeEffect from "../Resources/FadeEffect";
import TopPresentation from "./TopPresentation";
import MovieBillboard from "./MovieBillboard";
import UpcomingMovies from "./UpcomingMovies";
import Swal from "sweetalert2";

export default function HomeComponent() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("payment_success")) {
      // Si la URL contiene el parámetro "payment_success", mostrar SweetAlert2
      setShowPopup(true);
      showSuccessAlert();
    }
  }, []);

  const showSuccessAlert = () => {
    Swal.fire({
      icon: "success",
      title: "¡Pago Exitoso!",
      text: "¡Gracias por su compra!",
    });
  };

  return (
    <FadeEffect>
      <main style={{ minHeight: "80vh" }}>
        <TopPresentation />
        <a id="cartelera" />
        <MovieBillboard />
        <a id="proximamente" />
        <UpcomingMovies />
      </main>
    </FadeEffect>
  );
}
