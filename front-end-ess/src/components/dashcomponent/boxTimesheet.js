import React from "react";


function BoxTimesheet() {
  return (
    <section className="content-twoline">
      <h1 className="txt-tittlekehadiran">Timesheet</h1>
      <div className="overview-boxestwoline">
        <div className="boxtwoline color-blue">
          <div className="right-sidetwoline">
            <div className="numbertwoline">8</div>
            <div className="box-topictwoline">Timesheet dibuat</div>
          </div>
        </div>
        <div className="boxtwoline color-red">
          <div className="right-sidetwoline">
            <div className="numbertwoline">1</div>
            <div className="box-topictwoline">Timesheet ditolak</div>
          </div>
        </div>
        <div className="boxtwoline color-orange">
          <div className="right-sidetwoline">
            <div className="numbertwoline">1</div>
            <div className="box-topictwoline">Timesheet ditinjau</div>
          </div>
        </div>
        <div className="boxtwoline color-green">
          <div className="right-sidetwoline">
            <div className="numbertwoline">1</div>
            <div className="box-topictwoline">Timesheet disetujui</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BoxTimesheet;