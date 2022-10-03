import React from "react";
import { NavLink } from 'react-router-dom'

function Button({ children, handle }) {
  return (
    <NavLink
      to="#"
      className="btn text-white text-center d-block"
      tabIndex="-1"
      role="button"
      aria-disabled="true"
      style={{ backgroundColor: "#194567", width: "100%" }}
      onClick={handle}
    >
      {children}
    </NavLink>
  );
}

export default Button;
