import { Logo } from "../../../Images";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "components/button/button";
import { useState } from "react";

const RegisterUser = ({ requestBody, setRequestBody }) => {
  const [errorField, setErrorField] = useState({});
  const [errorStatus, setErrorStatus] = useState(false);
  const navigate = useNavigate();
  const HandlerSubmit = (e) => {
    e.preventDefault();

    // cek apakah data sudah lengkap atau belum
    try {
      for (const key in requestBody) {
        if (key === "tempat_lahir") break;
        if (requestBody[key] === "") {
          setErrorField((prev) => ({ ...prev, [key]: "data masih kosong" }));
          setErrorStatus(true);
          throw new Error("error");
        }
      }
      if (!errorStatus) navigate("/register-primer");
    } catch (error) {
      setErrorStatus(false);
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="Register">
        <br></br>
        <div className="container">
          <div className="col-4 mx-auto">
            <img
              src={Logo["Logo Celerates.png"]}
              className="img-fluid mb-4"
              alt=""
            />
            <h4 className="text-center d-block">Daftar</h4>
            <label htmlFor="inputNama" className="form-label">
              Nama Lengkap
            </label>
            <br></br>
            <input
              type="Name"
              id="inputName"
              className={`form-control ${
                errorField?.nama_lengkap ? "is-invalid" : ""
              }`}
              placeholder="Masukan Nama Lengkap"
              onChange={(e) =>
                setRequestBody({ ...requestBody, nama_lengkap: e.target.value })
              }
            />
            <br></br>
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
                setRequestBody({ ...requestBody, email: e.target.value })
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
                setRequestBody({ ...requestBody, password: e.target.value })
              }
            />
            <br></br>
            <NavLink to={"/register-primer"} style={{ textDecoration: "none" }}>
              <Button handle={HandlerSubmit}>Daftar</Button>
            </NavLink>
            <br></br>
            <label
              className={`text-center d-block ${
                errorField?.tanggal_lahir ? "is-invalid" : ""
              }`}
            >
              Sudah punya akun ? <NavLink to="/">Masuk</NavLink> disini!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterUser;
