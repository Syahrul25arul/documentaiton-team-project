import React from "react";
import { Users } from "Images";
import { NavLink } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo-details">
        <Image
          src={Users["Vector.png"]}
          className="col-md-6 img-users"
          rounded
        />
        <span className="logo_name">Mark Twain Nur Azizah Cantika</span>
        <NavLink
          to=""
          className="btn text-center btn-akun"
          role="button"
          aria-disabled="true"
        >
          Akun
        </NavLink>
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
  );
};

export default Sidebar;
