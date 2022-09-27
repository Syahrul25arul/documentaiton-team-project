import { Logo } from "../../../Images";
import { NavLink } from "react-router-dom";
<<<<<<< HEAD
import { useState } from "react";
=======
>>>>>>> 3a77828fb0f1e583dbb290fc1801f21b8a9632e5
import { Button } from "components/button";

const Login = () => {
  const [LoginBody, setLoginBody] = useState({
    email: "",
    password: "",
  });

  // function HandleEndpoint() {
  //   try {
  //     for (const responseBody in successLogin) {
  //       if( responseBody === "email" && "password") break
  //       if (successLogin[responseBody] === "") {
  //         setLoginBody
  //       }
  //     }
  //   } catch (error) {}
  // }

  const [errorField, setErrorField] = useState({});
  const HandlerSubmit = (e) => {
    e.preventDefault();

    // cek apakah data sudah lengkap atau belum
    try {
      for (const key in LoginBody) {
        setErrorField((prev) => ({ ...prev, [key]: "data masih kosong" }));
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="Login">
        <br></br>
        <div className="container">
          <div className="col-4 mx-auto">
            <img
              src={Logo["Logo Celerates.png"]}
              className="img-fluid mb-4"
              alt=""
            />
            <h4 className="text-center d-block">Masuk</h4>
            <label htmlFor="inputEmail" className="form-label">
              Email
            </label>
            <br></br>
            <input
              type="Email"
              id="inputEmail"
              className={`form-control ${
                errorField?.email ? "is-invalid" : ""
              }`}
              placeholder="Masukan Email"
              onChange={(e) =>
                setLoginBody({ ...LoginBody, email: e.target.value })
              }
            />
            <br></br>
            <label htmlFor="inputPassword" className="form-label">
              Password
            </label>
            <input
              placeholder="Masukan Password"
              type="password"
              id="inputPassword"
              className={`form-control ${
                errorField?.password ? "is-invalid" : ""
              }`}
              aria-describedby="passwordHelpBlock"
              onChange={(e) =>
                setLoginBody({ ...LoginBody, password: e.target.value })
              }
            />
            <br></br>
<<<<<<< HEAD
            <NavLink to="/dashboard" style={{ textDecoration: "none" }}>
              <Button handle={HandlerSubmit}>Masuk</Button>
            </NavLink>
=======
            <Button>
              Masuk
            </Button>
>>>>>>> 3a77828fb0f1e583dbb290fc1801f21b8a9632e5
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
