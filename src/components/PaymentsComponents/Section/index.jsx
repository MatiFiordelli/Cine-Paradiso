import React from "react";

export default function Section({ title, children, className }) {
  return (
    <div className={`${className}`}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}
