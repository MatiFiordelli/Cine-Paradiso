import React, { useEffect, useState } from "react";

export default function MovieDetails() {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    // Recuperar los datos de sessionStorage al cargar el componente
    const storedMovieData = sessionStorage.getItem("movieSelected");
    if (storedMovieData) {
      const parsedMovieData = JSON.parse(storedMovieData);
      setMovieData(parsedMovieData);
    }
  }, []);

  return (
    <div className="selected-movie mt-4">
      <h4>Película Seleccionada:</h4>
      <div className="row mt-3">
        <div className="col-md-4">
          <img
            src={movieData?.poster}
            alt={movieData?.title || "Título no disponible"}
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-8">
          <p className="mb-2">
            <strong>Nombre:</strong>{" "}
            {movieData?.title || "Título no disponible"}
          </p>
          <p className="mb-0">
            <strong>Clasificación:</strong>{" "}
            {movieData?.certification || "No disponible"}
          </p>
        </div>
      </div>
    </div>
  );
}
