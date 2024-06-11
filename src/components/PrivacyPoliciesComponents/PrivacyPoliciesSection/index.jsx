import React from "react";
import "./index.css"

export default function PrivacyPoliciesSection(){
    return (
        <section className=" container c-section mb-5 shadow mt-5 p-5 ">
        <div className="row justify-content-center  ">
          <div className="col-md-12 p-4">
            <article className="abtP text-center text-sm-start">
              <h2 className="mb-5 ftHd1 text-center">Políticas de Privacidad</h2>
              <p>
                En Cine Paradiso, la privacidad de nuestros usuarios es una prioridad para nosotros. Esta Política de Privacidad
                documenta los tipos de información personal que recibimos y recopilamos cuando utilizas nuestros servicios,
                así como la utilizamos, almacenamos y protegemos. Al utilizar nuestros servicios, aceptas el procesamiento
                de tu información de acuerdo con esta Política de Privacidad.
              </p>
              <h3 className="mb-3">Información que Recopilamos</h3>
              <p>
                En Cine Paradiso, podemos recopilar información personal como tu nombre, dirección de correo electrónico,
                información de pago  y otra información relevante necesaria para proporcionarte nuestros servicios.
                También podemos recopilar información no personal sobre tu interacción con nuestro sitio web o aplicación, como
                datos de navegación, información demográfica y preferencias del usuario.
              </p>
              <h3 className="mb-3">Uso de la Información</h3>
              <p>
                La información que recopilamos se utiliza para proporcionar y mejorar nuestros servicios, comunicarnos contigo,
                procesar tus transacciones, personalizar tu experiencia de usuario y cumplir con nuestros requisitos legales.
                No compartiremos tu información personal con terceros sin tu consentimiento, excepto en los casos que lo requiera
                la ley o cuando sea necesario para proporcionar nuestros servicios.
              </p>
  
              <h3 className="mb-3">Recopilación de Información al Comprar Boletos en Línea</h3>
              <p>
                Al comprar boletos en línea a través de nuestro sitio web, recopilamos información personal como tu nombre,
                dirección de correo electrónico, detalles de pago y cualquier otra información necesaria para procesar tu compra.
                Esta información se utiliza exclusivamente para procesar tu transacción y proporcionarte los boletos comprados.
                No compartimos esta información con terceros, excepto en los casos que lo requiera la ley o para procesar la compra.
              </p>
              <h3 className="mb-3">Uso de Cookies y Tecnologías Similares</h3>
              <p>
                Utilizamos cookies y otras tecnologías de seguimiento para mejorar tu experiencia en nuestro sitio web. Las cookies
                son pequeños archivos de texto que se almacenan en tu dispositivo para recordar tus preferencias y ofrecerte una
                experiencia personalizada. También utilizamos otras tecnologías similares, como píxeles de seguimiento y balizas web,
                para recopilar información sobre cómo interactúas con nuestro sitio. Puedes controlar o eliminar las cookies según
                tus preferencias a través de la configuración de tu navegador.
              </p>
            </article>
          </div>
        </div>
      </section>
    );
    
}