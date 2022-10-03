import React from "react";
import Navbar from "components/navbar/navbar";
import Sidebar from "components/sidebar/sidebar";
import MainTimesheet from "components/timesheet/mainTimesheet";
import BoxMainTimesheet from "components/timesheet/boxMainTimesheet";


const Timesheet = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <BoxMainTimesheet
        headerMessage={"Anda belum mengisi timesheet hari ini!"}
        descriptionMessage={
          "Klik tombol “Isi timesheet” untuk membuat timesheet."
        }
      >
        Isi Timesheet
      </BoxMainTimesheet>
      <MainTimesheet />      
    </>
  );
};

export default Timesheet;
