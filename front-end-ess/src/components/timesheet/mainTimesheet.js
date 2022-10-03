import React from "react";
import { NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Container, Row, Table } from "react-bootstrap";

const MainTimesheet = () => {
  return (
    <>
      <section className="content-box">
        <div className="card-boxes">
          <div className="display-rowdatetimesheet">
            <h6 className="txt-timesheet"> TimeSheet </h6>
            <span className="txt-datetimesheet">
              Update 01/09/2022 - 12/09/2022
            </span>
          </div>
        </div>
      </section>

      <section className="content-box">
        <div className="card-boxes">
          <Card className="box-cards">
            <Container>
              <Card.Body>
                <Row>
                  <span className="txt-date"> 30 September 2022 </span>
                  <div className="display-rowtop">
                    <Table
                      borderless
                      responsive="md"
                      className="table-timesheet"
                    >
                      <tbody>
                        <tr>
                          <th rowSpan={2}>08.00 - 12.00</th>
                          <th>Aktivitas</th>
                          <th>Projek</th>
                        </tr>
                        <tr>
                          <td className="txt-datetimesheet">
                            Membuat laman auth PAMA App’s menggunakan React JS
                            Javascript
                          </td>
                          <td className="txt-datetimesheet">
                            PAMA Kalimantan Constructor
                          </td>
                        </tr>
                        <tr>
                          <th rowSpan={2}>08.00 - 12.00</th>
                          <th>Aktivitas</th>
                          <th>Projek</th>
                        </tr>
                        <tr>
                          <td className="txt-datetimesheet">
                            Bug Fixing Blue Bird Transport App pada modul
                            transaksi
                          </td>
                          <td className="txt-datetimesheet">Blue Bird Group</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                  <span className="border-bottom"></span>
                  <Table borderless responsive="md" className="table-timesheet">
                    <tbody>
                      <tr>
                        <th rowSpan={2}>Status :</th>
                        <th rowSpan={2}>Disetujui Tech Lead</th>
                        <th>Catatan</th>
                      </tr>
                      <tr>
                        <td className="txt-datetimesheet">
                          Kinerja yang sangat Bagus Dalam Bekerja
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Row>
                <div className="row-btn">
                  <NavLink to="" className="btnlink btn-delete">
                    Hapus
                  </NavLink>
                  <NavLink to="" className="btnlink btn-edit">
                    Ubah
                  </NavLink>
                </div>
              </Card.Body>
            </Container>
          </Card>
        </div>
      </section>
    </>
  );
};

export default MainTimesheet;
