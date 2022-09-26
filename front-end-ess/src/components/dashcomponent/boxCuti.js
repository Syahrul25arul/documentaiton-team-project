import React from "react";


function BoxCuti() {
  return (
    <section className="content-threeline">
      <h1 className="txt-tittlekehadiran">Cuti</h1>
      <div className="overview-boxesthreeline">
        <div className="boxthreeline color-blue">
          <div className="right-sidethreeline">
            <div className="numberthreeline">8</div>
            <div className="box-topicthreeline">Cuti dibuat</div>
          </div>
        </div>
        <div className="boxthreeline color-red">
          <div className="right-sidethreeline">
            <div className="numberthreeline">1</div>
            <div className="box-topicthreeline">Cuti ditolak</div>
          </div>
        </div>
        <div className="boxthreeline color-orange">
          <div className="right-sidethreeline">
            <div className="numberthreeline">1</div>
            <div className="box-topicthreeline">Cuti ditinjau</div>
          </div>
        </div>
        <div className="boxthreeline color-green">
          <div className="right-sidethreeline">
            <div className="numberthreeline">1</div>
            <div className="box-topicthreeline">Cuti disetujui</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BoxCuti;