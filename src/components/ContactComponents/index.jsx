import React, { useState } from "react";
import Map from "./Map/index.jsx";
import ContactFormContent from "./ContactFormContent/index.jsx";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "message" && value.length > 400) {
      return;
    }
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      setError("Todos los campos son requeridos.");
      return;
    }
    setError("");

    try {
      const response = await fetch(
        "https://api-cine-paradiso.vercel.app/post-message-contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Hubo un problema al enviar el mensaje.");
      }

      const data = await response.json();
      Swal.fire("¡Éxito!", "¡Tu mensaje fue enviado exitosamente!", "success");

      //console.log("Datos del formulario de contacto:", formData);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      Swal.fire(
        "¡Error!",
        "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.",
        "error"
      );
    }
  };

  return (
    <div className="container mt-5 shadow p-5 mb-5 ">
      <div className="row ">
        <div className="col-md-6 mb-3 d-flex flex-column order-md-2 order-1">
          <h3 className="text-center mb-5 cntcHd1">Contáctanos</h3>
          <div className="flex-grow-1">
            <ContactFormContent
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              error={error}
            />
          </div>
        </div>
        <div className="col-md-6 d-flex flex-column order-md-1 order-2">
          <h4 className="text-center mb-5 cntcHd1">Cómo encontrarnos</h4>
          <div className="flex-grow-1">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

// a
