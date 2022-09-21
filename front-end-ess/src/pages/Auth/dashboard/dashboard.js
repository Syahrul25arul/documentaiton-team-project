import React from "react";
import { Logo } from "Images";
import { Users } from "Images";
import { NavLink } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { ButtonUsersDasboard } from "components/button";

const Dashboard = () => {
  return (
    <>
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="#">
          <img
            src={Logo["Celerates Logo Secondary.png"]}
            alt="Bootstrap"
            width={50}
            height={50}
            className="d-inline-block align-left"
          />
          <label htmlFor="ESS" className="form-label">
            <h4 className="titles-navbars">Employee <br/>Self Service</h4>
          </label>
        </NavLink>
        <button className="btn btn-sm btn-outline-secondary" type="button">
          Keluar
        </button>
      </div>
    </nav>

    <aside className="sidebar">
        <div className="logo-details">
         <Image src={Users["Vector.png"]} className="col-md-6 img-users" rounded/>
          <span className="logo_name">Mark Twain Nur Azizah Rendy</span>
          <ButtonUsersDasboard>Akun</ButtonUsersDasboard>
        </div>
          <ul className="nav-links">
            <li>
              <NavLink to="#" className="active">
                <span className="links_name">Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="#">
                <span className="links_name">Kehadiran</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="#">
                <span className="links_name">Timesheet</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="#">
                <span className="links_name">Cuti</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="#">
                <span className="links_name">Reimburstment</span>
              </NavLink>
            </li>
          </ul>
    </aside>
    </>
  );
};

export default Dashboard;
