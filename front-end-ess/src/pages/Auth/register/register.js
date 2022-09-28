import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import RegisterPrimer from "./register-primer";
import RegisterUser from "./register-user";

function Register() {
  const [requestBody, setRequestBody] = useState({
    nama_lengkap: "",
    email: "",
    password: "",
    tempat_lahir: "",
    tanggal_lahir: "",
    nik: "",
    alamat_ktp: "",
    pendidikan_terakhir: "",
    nama_pendidikan_terakhir: "",
    jurusan_pendidikan_terakhir: "",
    alamat_email_aktif: "",
    no_tlp_aktif: "",
    kontak_darurat: "",
    photo_employee: "",
    no_tlp_kontak_darurat: "",
  });

  const location = useLocation();
  return location.pathname === "/register" ? (
    <RegisterUser requestBody={requestBody} setRequestBody={setRequestBody} />
  ) : (
    <RegisterPrimer requestBody={requestBody} setRequestBody={setRequestBody} />
  );
}

export default Register;
