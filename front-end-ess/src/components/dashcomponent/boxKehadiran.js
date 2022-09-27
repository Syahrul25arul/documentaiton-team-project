import React from "react";


function BoxKehadiran() {
  return (
    <section className="content-firstline">
    <h1 className="txt-tittlekehadiran">Kehadiran</h1>
    <div className="overview-boxesfirstline">
      <div className="boxfirstline color-blue">
        <div className="right-sidefirstline">
          <div className="numberfirstline">8</div>
          <div className="box-topicfirstline">Kehadiran dibuat</div>
        </div>
      </div>
      <div className="boxfirstline color-red">
        <div className="right-sidefirstline">
          <div className="numberfirstline">1</div>
          <div className="box-topicfirstline">Kehadiran ditolak</div>
        </div>
      </div>
      <div className="boxfirstline color-orange">
        <div className="right-sidefirstline">
          <div className="numberfirstline">1</div>
          <div className="box-topicfirstline">Kehadiran ditinjau</div>
        </div>
      </div>
      <div className="boxfirstline color-green">
        <div className="right-sidefirstline">
          <div className="numberfirstline">1</div>
          <div className="box-topicfirstline">Kehadiran disetujui</div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default BoxKehadiran;