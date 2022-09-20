import { Logo } from "../../../Images";
import { NavLink } from "react-router-dom";
import { Button, Select } from "components/button";
const RegisterPrimer = () => {
  return (
    <>
      <div className="Login">
        <br></br>
        <div className="container">
          <div className="col-4 mx-auto">
            <img
              src={Logo["Logo Celerates.png"]}
              className="img-fluit mb-5"
              style={{ width: "50%" }}
            />
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
            <label htmlFor="inputPendidikan">Pendidikan Terakhir</label>
            <Select>Pendidikan</Select>
            <br></br>
            <label htmlFor="inputInstitusi" className="form-label">
              Nama Institusi Pendidikan Terakhir
            </label>
            <input
              type="NamaInstitusi"
              id="inputInstitusi"
              className="form-control"
              placeholder="Contoh: Universitas Airlangga"
            />
            <br></br>
            <label htmlFor="inputHP" className="form-label">
              No Handphone Aktif
            </label>
            <input
              type="noHP"
              id="inputHP"
              className="form-control"
              placeholder="Contoh: 08XXXXXXXXXX"
            />
            <br></br>
            <label htmlFor="inputKontak" className="form-label">
              Kontak Darurat
            </label>
            <input
              type="KontakDarurat"
              id="inputKontak"
              className="form-control"
              placeholder="Contoh: Orang Tua"
            />
            <br></br>
            <label htmlFor="inputNoKontak" className="form-label">
              No Kontak Darurat
            </label>
            <input
              type="NoKontakDarurat"
              id="inputNoKontak"
              className="form-control"
              placeholder="Contoh: 08XXXXXXXXXX"
            />
            <br></br>
            <label htmlFor="inputFoto" className="form-label">
              Foto
            </label>
            <input
              type="file"
              className="form-control-file"
              id="FormControlFile"
            />
            <br></br>
            <NavLink to={"/dashboard"} style={{ textDecoration: "none" }}>
              <Button>Submit</Button>
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

export default RegisterPrimer;
