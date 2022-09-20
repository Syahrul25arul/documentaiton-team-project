import React from "react";

function ButtonSmall({ children }) {
  return (
    <button
      href="#"
      className="btn text-white col-auto my-1"
      tabIndex="-1"
      role="button"
      aria-disabled="true"
      style={{ backgroundColor: "#194567", width: "50%" }}
    >
      {children}
    </button>
  );
}

export default ButtonSmall;
