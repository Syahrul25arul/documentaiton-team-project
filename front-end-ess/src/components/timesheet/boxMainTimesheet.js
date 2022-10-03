import { NavLink } from "react-router-dom";

const BoxMainTimesheet = ({ children, headerMessage, descriptionMessage }) => {
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
          <NavLink to="/formtimesheet" className="btn-data">
            {children}
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default BoxMainTimesheet;