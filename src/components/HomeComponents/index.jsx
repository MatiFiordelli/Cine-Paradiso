import React from "react";
import FadeEffect from "../Resources/FadeEffect";
import TopPresentation from "./TopPresentation";
import MovieBillboard from "./MovieBillboard";
import UpcomingMovies from "./UpcomingMovies";

export default function HomeComponent() {
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
