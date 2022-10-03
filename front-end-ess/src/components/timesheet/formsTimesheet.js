import React from "react";
import { NavLink } from "react-router-dom";
import { Row, Form, Col, Button } from "react-bootstrap";

const FormsTimesheet = () => {
  return (
    <section className="content-form">
      <div className="form-boxes">
        <div className="form-box">
          <Form>
            <div className="date-timesheet">
              <Row className="mb-3">
                <Form.Group controlId="dob">
                  <Form.Label>Tanggal</Form.Label>
                  <Form.Control
                    type="date"
                    name="dob"
                    placeholder="Pilih Tanggal"
                  />
                </Form.Group>
              </Row>
            </div>
            <div className="form-timesheet">
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridNameProyek">
                  <Form.Label>Nama Proyek</Form.Label>
                  <Form.Select defaultValue="Isi Nama Proyek">
                    <option>Pilih Proyek</option>
                    <option>Astra Frontend</option>
                    <option>Bluebird Backend</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formWaktuMulai">
                  <Form.Label>Waktu Mulai</Form.Label>
                  <Form.Control type="text" placeholder="00.00" />
                </Form.Group>

                <Form.Group as={Col} controlId="formWaktuSelesai">
                  <Form.Label>Waktu Selesai</Form.Label>
                  <Form.Control type="text" placeholder="00.00" />
                </Form.Group>
              </Row>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Deskripsi Pekerjaan</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

              <div className="row-btn">
                <Button type="submit" className="btnlink btn-blue">
                  Tambah Aktivitas
                </Button>
                <NavLink to="" className="btnlink btn-white">
                  Hapus
                </NavLink>
              </div>
                <Button variant="secondary" className="btn-grey">
                  Submit Timesheet
                </Button>
            </div>
          </Form>
        </div>
      </div>
      <br />
    </section>
  );
};

export default FormsTimesheet;
