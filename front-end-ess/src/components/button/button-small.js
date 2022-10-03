import React from "react";
import { NavLink } from 'react-router-dom'

function ButtonSmall({ children }) {
  return (
    <NavLink
      to="#"
      className="btn text-white col-auto my-1"
      tabIndex="-1"
      role="button"
      aria-disabled="true"
      style={{ backgroundColor: "#194567", width: "50%" }}
    >
      {children}
    </NavLink>
  );
}

export default ButtonSmall;