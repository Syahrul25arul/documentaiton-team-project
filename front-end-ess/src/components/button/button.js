import React from "react";

function button({ children }) {
  return (
    <button
      href="#"
      className="btn text-white text-center d-block"
      tabIndex="-1"
      role="button"
      aria-disabled="true"
      style={{ backgroundColor: "#194567", width: "100%" }}
    >
      {children}
    </button>
  );
}

export default button;
