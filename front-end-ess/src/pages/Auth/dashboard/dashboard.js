import React from "react";
import { Logo } from "Images";
import { Users } from "Images";
import { NavLink } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import BoxKehadiran from "components/dashcomponent/boxKehadiran";
import BoxTimesheet from "components/dashcomponent/boxTimesheet";
import BoxCuti from "components/dashcomponent/boxCuti";
import BoxReimburstment from "components/dashcomponent/boxReimburstment";


const Dashboard = () => {

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
    <>
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

    <aside className="sidebar">
        <div className="logo-details">
         <Image src={Users["Vector.png"]} className="col-md-6 img-users" rounded/>
          <span className="logo_name">Mark Twain Nur Azizah Rendy</span>
          <NavLink
            to=""
            className="btn text-center btn-akun"
            role="button"
            aria-disabled="true">
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

    <section className="home-content">
      <div className="overview-boxes">
        <div className="box">
          <div className="right-side">
            <div className="boxs-topic">Lengkapi data kepegawaianmu sekarang!</div>
            <span className="topics-box">1 langkah terakhir agar kamu bisa mengajukan cuti dan reimburstment.</span>
          </div>
          <NavLink to="" className="btn-data">Lengkapi Data</NavLink>
        </div>
      </div>
    </section>

    <BoxKehadiran/>
    <BoxTimesheet/>
    <BoxCuti/>
    <BoxReimburstment/>
    </>
  );
};

export default Dashboard;
