import React from "react";

function navbar() {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={Logo["Celerates Logo Secondary.png"]}
            alt="Bootstrap"
            width={40}
            height={40}
            className="d-inline-block align-left"
          />
          <label htmlFor="ESS" className="form-label">
            Employee Self Service
          </label>
        </a>
        <button class="btn btn-sm btn-outline-secondary" type="button">
          Keluar
        </button>
      </div>
    </nav>
  );
}

export default navbar;
