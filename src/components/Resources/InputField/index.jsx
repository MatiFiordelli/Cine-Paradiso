import React from "react";

export default function InputField({
  label,
  type,
  id,
  name,
  value,
  onChange,
  required,
  placeholder,
  autoFocus,
  autoComplete,
}) {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        autoFocus={autoFocus}
        autoComplete={autoComplete}
      />
    </div>
  );
}
