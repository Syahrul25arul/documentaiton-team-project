import React from "react";
import Navbar from "components/navbar/navbar";
import Sidebar from "components/sidebar/sidebar";
import BoxKepegawaian from "components/dashcomponent/boxKepegawaian";
import BoxKehadiran from "components/dashcomponent/boxKehadiran";
import BoxTimesheet from "components/dashcomponent/boxTimesheet";
import BoxCuti from "components/dashcomponent/boxCuti";
import BoxReimburstment from "components/dashcomponent/boxReimburstment";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <BoxKepegawaian
        headerMessage={"Lengkapi data kepegawaianmu sekarang!"}
        descriptionMessage={
          " 1 langkah terakhir agar kamu bisa mengajukan cuti dan reimburstment."
        }
      >
        Lengkapi Data
      </BoxKepegawaian>
      <BoxKehadiran />
      <BoxTimesheet />
      <BoxCuti />
      <BoxReimburstment />
    </>
  );
};

export default Dashboard;
