import React from "react";
import { Logo } from "Images";
import { NavLink } from 'react-router-dom'

const Navbar = () => {
   
  const navigations = () => {
    let sidebar = document.querySelector(".sidebar");
    let sidebarBtn = document.querySelector(".sidebarBtn");
    sidebarBtn.onclick = function() {
      sidebar.classList.toggle("active");
      if(sidebar.classList.contains("active")){
      sidebarBtn.classList.replace("bx-menu" ,"bx-menu-alt-right");
    }else
      sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
  }

  return (
    <nav className="navbar bg-light fixed-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="#">
          <img
            src={Logo["Celerates Logo Secondary.png"]}
            alt="logo"
            width={50}
            height={50}
            className="d-inline-block align-left"
          />
          <label htmlFor="ESS" className="form-label">
            <h4 className="titles-navbars">Employee <br/>Self Service</h4>
          </label>
        </NavLink>
        <div className="sidebar-button" onClick={() => navigations()}>
          <i className='bx bx-menu sidebarBtn'></i>
        </div>
        <button className="btn btn-sm btn-outline-secondary" type="button">
          Keluar
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
