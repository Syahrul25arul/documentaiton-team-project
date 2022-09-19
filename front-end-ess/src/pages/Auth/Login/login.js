import { Logo } from "../../../Images";

const Login = () => {
  return (
    <>
      <div className="Login">
        <br></br>
        <img src={Logo["Logo Celerates.png"]} className="img-fluid" />
        <div className="container">
          <div className="col-4 mx-auto">
            <h2 className="text-center d-block">Masuk</h2>
            <br></br>
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
            <br></br>
            <label for="inputPassword" className="form-label">
              Password
            </label>
            <br></br>
            <input
              placeholder="Masukan Password"
              type="password"
              id="inputPassword"
              className="form-control"
              aria-describedby="passwordHelpBlock"
            />
            <br></br>
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
