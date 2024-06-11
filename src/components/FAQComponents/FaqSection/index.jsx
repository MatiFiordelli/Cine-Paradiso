import React from "react";

export default function FaqSection(){
    const preguntas = [
        {
          pregunta: '¿Cuáles son los horarios de las proyecciones?',
          respuesta: `Los horarios de las proyecciones varían según el cine y el día de la semana. Puedes consultar nuestros horarios actualizados en la sección de  "Cartelera" de nuestro sitio web Cine Paradiso.`
        },
        {
          pregunta: '¿Cuál es el precio de las entradas?',
          respuesta: 'Te recomendamos revisar nuestros precios en línea en nuestra página "Precios" o en la taquilla del cine.'
        },
        {
          pregunta: '¿Cómo puedo obtener un reembolso si no puedo asistir a una proyección?',
          respuesta: 'Si necesitas un reembolso debido a que no puedes asistir a una proyección, por favor contáctanos directamente o visita la taquilla del cine donde compraste tus entradas. Nuestro personal estará encantado de ayudarte con tu solicitud de reembolso.'
        },
        
        {
          pregunta: '¿Ofrecen descuentos para grupos?',
          respuesta: 'Sí, ofrecemos descuentos para grupos grandes. Por favor, ponte en contacto con nuestro equipo de ventas para obtener más información sobre los descuentos disponibles y cómo reservar.'
        },
        {
          pregunta: '¿Cuál es la política de alimentos y bebidas en el cine?',
          respuesta: 'Permitimos a nuestros clientes traer alimentos y bebidas comprados fuera del cine, sin embargo, también ofrecemos una variedad de opciones de comida y bebida en nuestras instalaciones.'
        },
        {
          pregunta: '¿Ofrecen subtítulos para personas con discapacidad auditiva?',
          respuesta: 'Sí, ofrecemos proyecciones con subtítulos para personas con discapacidad auditiva en ciertos horarios y días. Consulta nuestra programación para más detalles.'
        }
      ];
   return(
    <section className="  container d-flex flex-column justify-content-center align-items-center position-relative top-0 mb-5 sectHero mt-5 shadow p-5">
    <div className="w-75  ">
        <h2 className="mb-5 ftHd1 text-center">Preguntas Frecuentes</h2>
        <article>
            <div className="accordion" id="accordionExample">
                {preguntas.map((pregunta, index) => (
                    <div className="accordion-item border-0 mb-3" key={index}>
                        <h2 className="accordion-header" id={`heading${index}`}>
                            <button className="accordion-button collapsed rounded " style={{backgroundColor:'#E9EFFF',fontWeight:"bolder"}} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="false" aria-controls={`collapse${index}`}>
                                <span className="me-2 fs-2 text-primary">+</span> {pregunta.pregunta}
                            </button>
                        </h2>
                        <div id={`collapse${index}`} className="accordion-collapse collapse" aria-labelledby={`heading${index}`} data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                {pregunta.respuesta}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </article>
    </div>
</section>
   )
}