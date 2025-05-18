import React from "react";

export function Button({ children, className = "", ...props }) {
  return (
    <button className={`rounded px-4 py-2 font-medium ${className}`} {...props}>
      {children}
    </button>
  );
}
