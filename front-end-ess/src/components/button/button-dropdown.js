import React from "react";
import { NavLink } from 'react-router-dom'
function Dropdown({ children }) {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {children}
      </button>
      <ul className="dropdown-menu">
        <li>
          <NavLink to="#" className="dropdown-item" >
            Action
          </NavLink>
        </li>
        <li>
          <NavLink to="#" className="dropdown-item" >
            Another action
          </NavLink>
        </li>
        <li>
          <NavLink to="#" className="dropdown-item">
            Something else here
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
