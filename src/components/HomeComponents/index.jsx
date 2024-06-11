import React, { useEffect } from "react";
import FadeEffect from "../Resources/FadeEffect";
import TopPresentation from "./TopPresentation";
import MovieBillboard from "./MovieBillboard";
import UpcomingMovies from "./UpcomingMovies";
import Swal from "sweetalert2";

export default function HomeComponent() {
  useEffect(() => {
    // Verificar si estamos en la página de éxito de pago y mostrar el SweetAlert2
    if (window.location.pathname === "/payment_success") {
      Swal.fire({
        icon: "success",
        title: "Pago exitoso",
        text: "¡Gracias por su compra!",
        confirmButtonText: "Ok",
      }).then(() => {
        window.location.href = "https://cine-paradiso.vercel.app"; // Redireccionar después de hacer clic en OK
      });
    }
  }, []);


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
