import { Logo } from "../../../Images";

const Login = () => {
  return (
    <>
      <div className="Login">
        <br></br>
        <div className="container">
          <div className="col-4 mx-auto">
            <img src={Logo["Logo Celerates.png"]} className="img-fluid mb-5" />
            <h2 className="text-center d-block">Masuk</h2>
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
            <a
              href="#"
              className="btn btn-primary disabled text-center d-block"
              tabindex="-1"
              role="button"
              aria-disabled="true"
            >
              Masuk
            </a>
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
