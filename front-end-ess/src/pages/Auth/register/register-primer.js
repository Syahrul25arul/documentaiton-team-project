import { Logo } from "../../../Images";
import { NavLink } from "react-router-dom";
import { Button, Dropdown } from "components/button";
const RegisterPrimer = () => {
  return (
    <>
      <div className="Login">
        <br></br>
        <div className="container">
          <div className="col-4 mx-auto">
            <img src={Logo["Logo Celerates.png"]} className="img-fluid mb-5" />
            <h2 className="text-center d-block">Data Primer</h2>
            <br></br>
            <label htmlFor="inputTempat" className="form-label">
              Tempat Lahir
            </label>
            <br></br>
            <input
              type="TempatLahir"
              id="inputTempat"
              className="form-control"
              placeholder="contoh: Jakarta"
            />
            <br></br>
            <label htmlFor="inputTanggal" className="form-label">
              Tanggal Lahir
            </label>
            <input
              type="TanggalLahir"
              id="inputTanggal"
              className="form-control"
              placeholder="contoh: 18-02-1970"
            />
            <br></br>
            <label htmlFor="inputNIK" className="form-label">
              NIK
            </label>
            <input
              type="NIK"
              id="inputNIK"
              className="form-control"
              placeholder="Masukan NIK"
            />
            <br></br>
            <div className="form-group">
              <label htmlFor="inputAlamat">Alamat (Sesuai KTP)</label>
              <textarea
                placeholder="contoh: Jalan Mekar Arum no 5 RT 05 
                RW 05 Kelurahan Pasar Sabtu, 
                Kecamatan Lapang Gede, Jakarta
                Tenggara"
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="4"
              ></textarea>
            </div>
            <br></br>
            <Button>Submit</Button>
            <br></br>
            <label htmlFor="inputPendidikan">Pendidikan Terakhir</label>
            <Dropdown>Pendidikan</Dropdown>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPrimer;
