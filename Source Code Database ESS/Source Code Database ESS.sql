
CREATE TYPE usersverfied AS ENUM ('true','false');
CREATE TYPE roleusers AS ENUM ('admin' , 'employee');
CREATE TABLE users(
   id_user SERIAL NOT NULL,
   email VARCHAR(150) NOT NULL,
   password VARCHAR(255) NOT NULL,
   status_verified usersverfied,
   user_role roleusers,
   PRIMARY KEY(id_user)
);

CREATE TYPE employestatus AS ENUM ('aktif', 'nonaktif');
CREATE TABLE employee(
   id_employe SERIAL NOT NULL,
   id_user INTEGER,
   nik bigint,
   nama_lengkap VARCHAR(80),
   tempat_lahir VARCHAR(100),
   tanggal_lahir DATE,
   alamat_ktp VARCHAR(150),
   pendidikan_terakhir VARCHAR(50),
   nama_pendidikan_terakhir VARCHAR(100),
   jurusan_pendidikan_terakhir VARCHAR(45),
   alamat_email_aktif VARCHAR(90),
   no_tlp_aktif VARCHAR(30),
   kontak_darurat VARCHAR(70),
   no_tlp_kontak_darurat VARCHAR(30),
   status_employee employestatus,
   photo_employee VARCHAR(150),
   PRIMARY KEY(id_employe),
   CONSTRAINT fk_employe
      FOREIGN KEY(id_employe) 
	  REFERENCES employee(id_employe)
	  ON DELETE SET NULL
);

CREATE TYPE statussaatini AS ENUM ('kawin', 'belum_kawin');
CREATE TYPE statusbpjskesehatan AS ENUM ('ada', 'tidak');
CREATE TYPE statusbpjsketenaga_kerjaan AS ENUM ('ada', 'tidak');
CREATE TABLE employeesecondarydata(
   id_employe_secondary SERIAL NOT NULL,
   id_employe INT NOT NULL,
   no_npwp VARCHAR(35),
   no_kartukeluarga VARCHAR(30),
   status_saatini statussaatini,
   tanggungan INT,
   no_rek VARCHAR(35),
   nama_rek VARCHAR(40),
   no_bpjs_kesehatan VARCHAR(45),
   status_bpjs_kesehatan statusbpjskesehatan,
   status_bpjs_ketenagakerjaan statusbpjsketenaga_kerjaan,
   created_at DATE,
   updated_at DATE,
   PRIMARY KEY(id_employe_secondary),
   CONSTRAINT fk_employe
      FOREIGN KEY(id_employe) 
	  REFERENCES employee(id_employe)
	  ON DELETE SET NULL
);

CREATE TABLE employeefile(
   id_employe_file SERIAL NOT NULL,
   id_employe INT NOT NULL,
   file_bpjs_kesehatan VARCHAR(150),
   file_bpjs_ketenagakerjaan VARCHAR(150),
   file_npwp VARCHAR(150),
   file_kartu_keluarga VARCHAR(150),
   file_ijazah VARCHAR(150),
   file_sertifikat_keahlian VARCHAR(150),
   file_ktp VARCHAR(150),
   created_at TIMESTAMP,
   updated_at TIMESTAMP,
   PRIMARY KEY(id_employe_file),
   CONSTRAINT fk_employe
      FOREIGN KEY(id_employe) 
	  REFERENCES employee(id_employe)
	  ON DELETE SET NULL
);

CREATE TABLE client(
   id_client SERIAL NOT NULL,
   nama_client VARCHAR(150) NOT NULL,
   lattitude VARCHAR(250),
   longitude VARCHAR(250),
   alamat_client VARCHAR(255),
   PRIMARY KEY(id_client)
);

CREATE TABLE project(
   id_project SERIAL NOT NULL,
   id_client INT NOT NULL,
   project_name VARCHAR(150),
   PRIMARY KEY(id_project),
   CONSTRAINT fk_client
      FOREIGN KEY(id_client) 
	  REFERENCES client(id_client)
	  ON DELETE SET NULL
);

CREATE TABLE employeeonproject(
   id_employe_on_project SERIAL NOT NULL,
   id_employe INT NOT NULL,
   id_project INT NOT NULL,
   created_at TIMESTAMP,
   updated_at TIMESTAMP,
   PRIMARY KEY(id_employe_on_project),
   CONSTRAINT fk_employe
      FOREIGN KEY(id_employe) 
	  REFERENCES employee(id_employe)
	  ON DELETE SET Null,
   CONSTRAINT fk_project
      FOREIGN KEY(id_project) 
	  REFERENCES project(id_project)
	  ON DELETE SET NULL
);

CREATE TABLE currentcuti(
   id_employe SERIAL NOT NULL,
   sisa_cuti float8,
   CONSTRAINT fk_employe
      FOREIGN KEY(id_employe) 
	  REFERENCES employee(id_employe)
	  ON DELETE SET NULL
);

CREATE TYPE di_tujukan AS ENUM ('cuti individu', 'cuti bersama');
CREATE TABLE cutitype(
   id_cuti_type SERIAL NOT NULL,
   cuti_type_name VARCHAR(150) NOT NULL,
   potongan_cuti FLOAT4 NOT NULL,
   durasi_cuti TIME NOT NULL,
   ditujukan di_tujukan,
   PRIMARY KEY(id_cuti_type)
);

CREATE TYPE sedangdiproject AS ENUM ('true', 'false');
CREATE TABLE cuti(
   id_cuti SERIAL NOT NULL,
   id_employe INT NOT NULL,
   id_cuti_type INT NOT NULL,
   tgl_penerbitan_form DATE,
   tgl_mulai_cuti DATE,
   tgl_selesai_cuti DATE,
   keterangan_cuti TEXT,
   no_tlp VARCHAR(35),
   alamat_selama_cuti VARCHAR(150),
   total_hari INT,
   sedang_di_project sedangdiproject,
   status_cuti VARCHAR(40),
   PRIMARY KEY(id_cuti),
   CONSTRAINT fk_employe
      FOREIGN KEY(id_employe) 
	  REFERENCES employee(id_employe)
	  ON DELETE SET NULL,
   CONSTRAINT fk_cutitype
      FOREIGN KEY(id_cuti_type) 
	  REFERENCES cutitype(id_cuti_type)
	  ON DELETE SET NULL
);

CREATE TABLE cutiwhenonproject(
   id_cuti_on_project SERIAL NOT NULL,
   id_cuti INT NOT NULL,
   id_project INT NOT NULL,
   nama_atasan_client VARCHAR(150),
   no_tlp_atasan_client VARCHAR(35),
   pegawai_pengganti VARCHAR(150),
   file_approval_client VARCHAR(200),
   catatan TEXT,
   issue_by TEXT,
   PRIMARY KEY(id_cuti_on_project),
   CONSTRAINT fk_cuti
      FOREIGN KEY(id_cuti) 
	  REFERENCES cuti(id_cuti)
	  ON DELETE SET NULL,
   CONSTRAINT fk_project
      FOREIGN KEY(id_project) 
	  REFERENCES project(id_project)
	  ON DELETE SET NULL
);

CREATE TYPE statusovertime AS ENUM ('true', 'false');
CREATE TYPE lokasiabsensi AS ENUM ('kantor client', 'wfh', 'main office');
CREATE TABLE absensi(
   id_absensi SERIAL NOT NULL,
   id_employe INT NOT NULL,
   id_cuti INT,
   tgl_absen DATE,
   masuk TIME,
   pulang TIME,
   lokasi_absen lokasiabsensi,
   terlambat_kerja INT,
   bobot FLOAT8,
   over_time INT,
   status_overtime statusovertime,
   keterangan TEXT,
   PRIMARY KEY(id_absensi),
   CONSTRAINT fk_employe
      FOREIGN KEY(id_employe) 
	  REFERENCES employee(id_employe)
	  ON DELETE SET NULL,
   CONSTRAINT fk_cuti
      FOREIGN KEY(id_cuti) 
	  REFERENCES cuti(id_cuti)
	  ON DELETE SET NULL
);

CREATE TYPE isholidays AS ENUM ('true', 'false');
CREATE TABLE timesheet(
   id_timesheet SERIAL NOT NULL,
   id_employe INT NOT NULL,
   created_at TIMESTAMP,
   updated_at TIMESTAMP,
   is_holiday isholidays,
   PRIMARY KEY(id_timesheet),
   CONSTRAINT fk_employe
      FOREIGN KEY(id_employe) 
	  REFERENCES employee(id_employe)
	  ON DELETE SET NULL
);

CREATE TABLE activitytimesheet(
   id_activity SERIAL NOT NULL,
   name_activity VARCHAR(100),
   PRIMARY KEY(id_activity)
);

CREATE TABLE timesheetdetail(
   id_detail_timesheet SERIAL NOT NULL,
   id_project INT NOT NULL,
   id_activity INT NOT NULL,
   start_at TIME,
   finish_at TIME,
   work_description VARCHAR(250),
   PRIMARY KEY(id_detail_timesheet),
   CONSTRAINT fk_project
      FOREIGN KEY(id_project) 
	  REFERENCES project(id_project)
	  ON DELETE SET NULL,
   CONSTRAINT fk_activitytimesheet
      FOREIGN KEY(id_activity) 
	  REFERENCES activitytimesheet(id_activity)
	  ON DELETE SET NULL
);

CREATE TABLE reimburstment_type(
   id_reimburstment_type SERIAL NOT NULL,
   reimburstment_type_name VARCHAR(100),
   PRIMARY KEY(id_reimburstment_type)
);

CREATE TYPE payment_reimburstment_type AS ENUM ('cash', 'transfer');
CREATE TABLE reimburstment(
   id_reimburstment SERIAL NOT NULL,
   id_employe INT NOT NULL,
   id_reimburstment_type INT NOT NULL,
   no_voucher VARCHAR(30),
   deksripsi_reimburstment TEXT,
   employee_direct_reimburstment INT,
   reimburstment_payment_type payment_reimburstment_type,
   transaction_date DATE,
   account_code VARCHAR(35),
   total_amount INT,
   status_reimburstment VARCHAR(35),
   PRIMARY KEY(id_reimburstment),
   CONSTRAINT fk_employe
      FOREIGN KEY(id_employe) 
	  REFERENCES employee(id_employe)
	  ON DELETE SET NULL,
   CONSTRAINT fk_reimburstment_type
      FOREIGN KEY(id_reimburstment_type) 
	  REFERENCES reimburstment_type(id_reimburstment_type)
	  ON DELETE SET NULL
);

CREATE TABLE reimburstment_struck_file(
   id_reimburstment_struck_file SERIAL NOT NULL,
   id_reimburstment INT NOT NULL,
   struck_reimburstment VARCHAR(200),
   PRIMARY KEY(id_reimburstment_struck_file),
   CONSTRAINT fk_reimburstment
      FOREIGN KEY(id_reimburstment) 
	  REFERENCES reimburstment(id_reimburstment)
	  ON DELETE SET NULL
);

CREATE TABLE reimburstment_type_transfer(
   id_reimburstment_transfer SERIAL NOT NULL,
   id_reimburstment INT NOT NULL,
   bank VARCHAR(30),
   name_bank VARCHAR(40),
   no_account VARCHAR(60),
   bank_branch VARCHAR(50),
   PRIMARY KEY(id_reimburstment_transfer),
   CONSTRAINT fk_reimburstment
      FOREIGN KEY(id_reimburstment) 
	  REFERENCES reimburstment(id_reimburstment)
	  ON DELETE SET NULL
);

CREATE TABLE position(
   id_position SERIAL NOT NULL,
   position_name VARCHAR(180),
   PRIMARY KEY(id_position)
);

CREATE TABLE employee_position(
   id_employee_position SERIAL NOT NULL,
   id_position INT NOT NULL,
   id_employe INT NOT NULL,
   PRIMARY KEY(id_employee_position),
   CONSTRAINT fk_position
      FOREIGN KEY(id_position) 
	  REFERENCES position(id_position)
	  ON DELETE SET NULL,
   CONSTRAINT fk_employe
      FOREIGN KEY(id_employe) 
	  REFERENCES employee(id_employe)
	  ON DELETE SET NULL
);

CREATE TABLE reimburstment_configuration(
   id_employee_position SERIAL NOT NULL,
   pic_pertama INT,
   pic_kedua INT,
   CONSTRAINT fk_employee_position
      FOREIGN KEY(id_employee_position) 
	  REFERENCES employee_position(id_employee_position)
	  ON DELETE SET NULL
);

CREATE TABLE employee_member(
   id_employee_position SERIAL NOT NULL,
   id_position_lead INT,
   id_position_member INT,
   CONSTRAINT fk_employee_position
      FOREIGN KEY(id_employee_position) 
	  REFERENCES employee_position(id_employee_position)
	  ON DELETE SET NULL
);

CREATE TABLE absen_configuration(
   id_absen_configuration SERIAL NOT NULL,
   durasi_jam_kerja INT,
   interval_keterlambatan INT,
   bobot_keterlambatan FLOAT4,
   maksimal_bobot_keterlambatan FLOAT8,
   id_position int,
   minimal_masuk_jam_kerja TIME,
   maksimal_masuk_jam_kerja TIME,
   CONSTRAINT fk_employee_position
      FOREIGN KEY(id_position) 
	  REFERENCES position(id_position)
	  ON DELETE SET NULL,
   PRIMARY KEY(id_absen_configuration)
);

CREATE TABLE timesheet_configuration(
   id_employee_position INT NOT NULL,
   interval_waktu_pembuatan INT,
   pic_timesheet INT NOT NULL,
   CONSTRAINT fk_employee_position
      FOREIGN KEY(id_employee_position) 
	  REFERENCES employee_position(id_employe_position)
	  ON DELETE SET NULL
);

CREATE TYPE statusresetstatus AS ENUM ('true', 'false');
CREATE TABLE cuti_configuration(
   id_employee_position INT NOT NULL,
   status_reset_cuti statusresetstatus,
   bulan_reset_cuti INT,
   factor_reset_cuti FLOAT8,
   maksimal_cuti_perbulan INT,
   pic_cuti VARCHAR(150),
   CONSTRAINT fk_employee_position
      FOREIGN KEY(id_employee_position) 
	  REFERENCES employee_position(id_employee_position)
	  ON DELETE SET NULL
);


CREATE TABLE approval(
   id_approval SERIAL NOT NULL,
   feature_type VARCHAR(85),
   whos_approv INT,
   status_approv VARCHAR(60),
   feature_id INT NOT NULL,
   tujuan_approval VARCHAR(150),
   created_at TIMESTAMP,
   updated_at TIMESTAMP,
   keterangan TEXT,
   PRIMARY KEY(id_approval)
);

CREATE TABLE notes(
   id_notes SERIAL NOT NULL,
   id_employe INT NOT NULL,
   feature_id INT NOT NULL,
   notes TEXT,
   feature_type VARCHAR(85),
   tujuan_notes VARCHAR(150),
   created_at TIMESTAMP,
   PRIMARY KEY(id_notes),
   CONSTRAINT fk_employe
      FOREIGN KEY(id_employe) 
	  REFERENCES employee(id_employe)
	  ON DELETE SET NULL
);

CREATE TABLE email (
   id_email_validation SERIAL NOT NULL,
   nama_email_validation VARCHAR(255),
   PRIMARY KEY(id_email_validation)
)