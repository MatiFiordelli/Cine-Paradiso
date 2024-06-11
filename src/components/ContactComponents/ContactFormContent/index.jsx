import React from "react";

const ContactFormContent = ({
  formData,
  handleChange,
  handleSubmit,
  error,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex flex-column align-items-center mb-5"
    >
      <div className="mb-3" style={{ width: "100%" }}>
        <label htmlFor="name" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Introduce tu nombre"
          required
          aria-label="Nombre"
        />
      </div>
      <div className="mb-3" style={{ width: "100%" }}>
        <label htmlFor="email" className="form-label">
          Correo Electrónico
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Introduce tu correo electrónico"
          required
          aria-label="Correo Electrónico"
        />
      </div>
      <div className="mb-3" style={{ width: "100%" }}>
        <label htmlFor="message" className="form-label">
          Mensaje
        </label>
        <textarea
          className="form-control"
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          placeholder="Introduce tu mensaje"
          required
          maxLength="400"
          style={{ maxHeight: "150px", overflowY: "auto" }}
          aria-label="Mensaje"
        ></textarea>
        <div className="text-right mt-2" style={{ color: "lightgray" }}>
          {400 - formData.message.length} caracteres restantes
        </div>
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="d-grid">
        <button type="submit" className="btn btn-secondary" aria-label="Enviar">
          Enviar
        </button>
      </div>
    </form>
  );
};

export default ContactFormContent;
