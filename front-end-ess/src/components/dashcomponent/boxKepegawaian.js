import React from "react";
import { NavLink } from "react-router-dom";

const BoxKepegawaian = ({ children, headerMessage, descriptionMessage }) => {
  return (
    <section className="home-content">
      <div className="overview-boxes">
        <div className="box">
          <div className="right-side">
            <div className="boxs-topic">
              {headerMessage}
            </div>
            <span className="topics-box">
             {descriptionMessage}
            </span>
          </div>
          <NavLink to="" className="btn-data">
            {children}
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default BoxKepegawaian;
