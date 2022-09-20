import { Logo } from "../../../Images";
import { NavLink } from "react-router-dom";
import Button from "components/button/button";
const Register = () => {
  return (
    <>
      <div className="Login">
        <br></br>
        <div className="container">
          <div className="col-4 mx-auto">
            <img src={Logo["Logo Celerates.png"]} className="img-fluid mb-4" alt=""/>
            <h4 className="text-center d-block">Daftar</h4>
            <label htmlFor="inputNama" className="form-label">
              Nama Lengkap
            </label>
            <br></br>
            <input
              type="Name"
              id="inputName"
              className="form-control"
              placeholder="Masukan Nama Lengkap"
            />
            <br></br>
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
            <NavLink to={"/register-primer"} style={{ textDecoration: "none" }}>
              <Button>Daftar</Button>
            </NavLink>
            <br></br>
            <label className="text-center d-block">
              Sudah punya akun ? <NavLink to="/">Masuk</NavLink> disini!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;