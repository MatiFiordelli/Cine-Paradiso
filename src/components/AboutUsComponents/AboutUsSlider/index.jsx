import React from 'react';
import cineparadisoext from "../../../../public/cineparadisoext.webp"
import cineparadisoint1 from "../../../../public/cineparadisoint1.webp"
import salacineparadiso from "../../../../public/salacineparadiso.webp"
import snacksparadiso from "../../../../public/snacksparadiso.webp"

export default function AboutUsSlider() {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="3" aria-label="Slide 4"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="d-block w-100 imgRnd" src={cineparadisoext} alt="Cine Paradiso Fachada" title="Cine Paradiso Fachada" aria-label="Imagen del Cine Paradiso por la parte externa" />
      </div>
      <div className="carousel-item">
        <img className="d-block w-100 imgRnd" src={cineparadisoint1} alt="Cine Paradiso Asientos" title="Cine Paradiso Asientos" aria-label="Imagen de los asientos de Cine Paradiso" />
      </div>
      <div className="carousel-item">
        <img className="d-block w-100 imgRnd" src={salacineparadiso} alt="Interior de la sala de cine Paradiso" title="Interior de la sala de cine Paradiso" aria-label="Imagen de la sala de Cine Paradiso por la parte interna" />
      </div>
      <div className="carousel-item">
        <img className="d-block w-100 imgRnd" src={snacksparadiso} alt="Sala para comprar snacks de cine Paradiso" title="Sala para comprar snacks de cine Paradiso" aria-label="Sala donde se compran los snacks de Cine Paradiso" />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  );
}