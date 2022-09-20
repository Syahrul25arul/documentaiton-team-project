import { Logo } from "../../../Images";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="Login">
        <br></br>
        <div className="container">
          <div className="col-4 mx-auto">
            <img src={Logo["Logo Celerates.png"]} className="img-fluid mb-4" alt=""/>
            <h4 className="text-center d-block">Masuk</h4>
            <label htmlFor="inputEmail" className="form-label">
              Email
            </label>
            <br></br>
            <input
              type="Email"
              id="inputEmail"
              className="form-control"
              placeholder="Masukan Email"
            />
            <br></br>
            <label htmlFor="inputPassword" className="form-label">
              Password
            </label>
            <input
              placeholder="Masukan Password"
              type="password"
              id="inputPassword"
              className="form-control"
              aria-describedby="passwordHelpBlock"
            />
            <br></br>
            <NavLink to=""
              className="btn btn-primary text-center d-block"
              tabIndex="-1"
              role="button"
              aria-disabled="true"
            >
              Masuk
            </NavLink>
            <br></br>
            <label className="text-center d-block">
              Belum punya akun ? <NavLink to="/register">Daftar</NavLink>{" "}
              disini!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;