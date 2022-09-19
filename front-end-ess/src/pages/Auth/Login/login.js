import { Logo } from "../../../Images";
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <div className="Login">
        <div className="container">
          <div className="col-4 mx-auto">
            <img src={Logo["Logo-Celerates.png"]} style={{ width:"50%", margin:"67px" }} className="img-fluid mb-4" alt=""/>
            <h3 className="text-center d-block">Masuk</h3>
            <label for="inputEmail" className="form-label"></label>
            Email
            <br></br>
            <input
              type="Email"
              id="inputEmail"
              className="form-control"
              placeholder="Masukan Email"
            />
            <br></br>
            <label for="inputPassword" className="form-label">
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
            <Link
              to="#"
              className="btn btn-primary disabled text-center d-block"
              tabindex="-1"
              role="button"
              aria-disabled="true"
            >
              Masuk
            </Link>
            <br></br>
            <label className="text-center d-block">
              Belum punya akun ? Daftar disini!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
