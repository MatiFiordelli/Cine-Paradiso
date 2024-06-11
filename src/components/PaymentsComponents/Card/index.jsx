import React from "react";

export default function Card({ children }) {
  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body">{children}</div>
    </div>
  );
}
