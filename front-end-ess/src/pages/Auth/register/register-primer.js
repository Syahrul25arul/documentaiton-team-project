import { Logo } from "../../../Images";
import { Navigate, NavLink } from "react-router-dom";
import { Button, Select } from "components/button";
import { useState } from "react";
import axios from "axios";

const RegisterPrimer = ({ requestBody, setRequestBody }) => {
  const [errorField, setErrorField] = useState({});
  const [image, setImage] = useState(null);
  const [errorStatus, setErrorStatus] = useState(false);

  const handleDropDown = (value) => {
    setRequestBody({
      ...requestBody,
      pendidikan_terakhir: value,
    });
  };

  const HandlerSubmit = (e) => {
    e.preventDefault();

    // cek apakah data sudah lengkap atau belum
    try {
      //  cek data yang di input  sudah valid apa belum
      for (const key in requestBody) {
        if (requestBody[key] === "" && key != "photo_employee") {
          setErrorField((prev) => ({ ...prev, [key]: "data masih kosong" }));
          setErrorStatus(true);
        }
      }
      let img = URL.createObjectURL(image);
      setRequestBody((prev) => ({ ...prev, photo_employee: img }));
      console.log(image);
      console.log(img);

      if (errorStatus) throw new Error("error field masih kosong");

      // kirim data ke server

      let response = axios.post("/register", requestBody);
      let data = response.data;

      // cek response
      if (data.code != 200) {
        // image yang tadi hapus
      }

      console.log(image);
    } catch (error) {
      setErrorStatus(false);
      console.log(error.message);
    }
  };
  console.log(errorField);
  return (
    <>
      <div className="Register-Primer">
        <br></br>
        <div className="container">
          <div className="col-4 mx-auto">
            <img
              src={Logo["Logo Celerates.png"]}
              className="img-fluit mb-5"
              style={{ width: "50%" }}
              alt="Logo Office"
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
              className={`form-control ${
                errorField?.tempat_lahir ? "is-invalid" : ""
              }`}
              placeholder="contoh: Jakarta"
              onChange={(e) =>
                setRequestBody({ ...requestBody, tempat_lahir: e.target.value })
              }
            />
            <div className="invalid-feedback">{errorField?.tempat_lahir}</div>
            <br></br>
            <label htmlFor="inputTanggal" className="form-label">
              Tanggal Lahir
            </label>
            <input
              type="TanggalLahir"
              id="inputTanggal"
              className={`form-control ${
                errorField?.tanggal_lahir ? "is-invalid" : ""
              }`}
              placeholder="contoh: 18-02-1970"
              onChange={(e) =>
                setRequestBody({
                  ...requestBody,
                  tanggal_lahir: e.target.value,
                })
              }
            />
            <div className="invalid-feedback">{errorField?.tanggal_lahir}</div>
            <br></br>
            <label htmlFor="inputNIK" className="form-label">
              NIK
            </label>
            <input
              type="NIK"
              id="inputNIK"
              className={`form-control ${errorField?.nik ? "is-invalid" : ""}`}
              placeholder="Masukan NIK"
              onChange={(e) =>
                setRequestBody({ ...requestBody, nik: e.target.value })
              }
            />
            <div className="invalid-feedback">{errorField?.tanggal_lahir}</div>
            <br></br>
            <div className="form-group">
              <label htmlFor="inputAlamat">Alamat (Sesuai KTP)</label>
              <textarea
                placeholder="contoh: Jalan Mekar Arum no 5 RT 05 
                RW 05 Kelurahan Pasar Sabtu, 
                Kecamatan Lapang Gede, Jakarta
                Tenggara"
                className={`form-control ${
                  errorField?.alamat_ktp ? "is-invalid" : ""
                }`}
                id="exampleFormControlTextarea1"
                rows="4"
                onChange={(e) =>
                  setRequestBody({ ...requestBody, alamat_ktp: e.target.value })
                }
              ></textarea>
            </div>
            <div className="invalid-feedback">{errorField?.alamat_ktp}</div>
            <br></br>
            <label htmlFor="inputPendidikan">Pendidikan Terakhir</label>
            <Select
              handleDropDown={handleDropDown}
              className={`form-control ${
                errorField?.pendidikan_terakhir ? "is-invalid" : ""
              }`}
            >
              <div className="invalid-feedback">
                {errorField?.pendidikan_terakhir}
              </div>
              Pendidikan
            </Select>
            <br></br>
            <label htmlFor="inputInstitusi" className="form-label">
              Nama Institusi Pendidikan Terakhir
            </label>
            <input
              type="NamaInstitusi"
              id="inputInstitusi"
              className={`form-control ${
                errorField?.nama_pendidikan_terakhir ? "is-invalid" : ""
              }`}
              placeholder="Contoh: Universitas Airlangga"
              onChange={(e) =>
                setRequestBody({
                  ...requestBody,
                  nama_pendidikan_terakhir: e.target.value,
                })
              }
            />
            <br></br>
            <label htmlFor="inputJurusan" className="form-label">
              Jurusan Pendidikan Terakhir
            </label>
            <input
              type="NamaJurusan"
              id="inputJurusan"
              className={`form-control ${
                errorField?.jurusan_pendidikan_terakhir ? "is-invalid" : ""
              }`}
              placeholder="Contoh: Teknik Informatika"
              onChange={(e) =>
                setRequestBody({
                  ...requestBody,
                  jurusan_pendidikan_terakhir: e.target.value,
                })
              }
            />
            <br></br>
            <label htmlFor="inputHP" className="form-label">
              No Handphone Aktif
            </label>
            <input
              type="noHP"
              id="inputHP"
              className={`form-control ${
                errorField?.no_tlp_aktif ? "is-invalid" : ""
              }`}
              placeholder="Contoh: 08XXXXXXXXXX"
              onChange={(e) =>
                setRequestBody({ ...requestBody, no_tlp_aktif: e.target.value })
              }
            />
            <br></br>
            <label htmlFor="inputKontak" className="form-label">
              Kontak Darurat
            </label>
            <input
              type="KontakDarurat"
              id="inputKontak"
              className={`form-control ${
                errorField?.kontak_darurat ? "is-invalid" : ""
              }`}
              placeholder="Contoh: Orang Tua"
              onChange={(e) =>
                setRequestBody({
                  ...requestBody,
                  kontak_darurat: e.target.value,
                })
              }
            />
            <br></br>
            <label htmlFor="inputEmailAktif" className="form-label">
              Alamat Email Aktif
            </label>
            <input
              type="EmailAktif"
              id="inputEmailAktif"
              className={`form-control ${
                errorField?.alamat_email_aktif ? "is-invalid" : ""
              }`}
              placeholder="Email"
              onChange={(e) =>
                setRequestBody({
                  ...requestBody,
                  alamat_email_aktif: e.target.value,
                })
              }
            />
            <br></br>
            <label htmlFor="inputNoKontak" className="form-label">
              No Kontak Darurat
            </label>
            <input
              type="NoKontakDarurat"
              id="inputNoKontak"
              className={`form-control ${
                errorField?.no_tlp_kontak_darurat ? "is-invalid" : ""
              }`}
              placeholder="Contoh: 08XXXXXXXXXX"
              onChange={(e) =>
                setRequestBody({
                  ...requestBody,
                  no_tlp_kontak_darurat: e.target.value,
                })
              }
            />
            <br></br>
            <label htmlFor="inputFoto" className="form-label">
              Foto
            </label>
            <input
              type="file"
              className={`form-control-file ${
                errorField?.photo_employee ? "is-invalid" : ""
              }`}
              id="FormControlFile"
              onChange={(e) => setImage(e.target.files[0])}
            />
            <br></br>

            <Button handle={HandlerSubmit}>Submit</Button>
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

export default RegisterPrimer;
