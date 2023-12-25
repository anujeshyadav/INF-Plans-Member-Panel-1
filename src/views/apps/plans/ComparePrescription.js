import React from "react";
import { Button, Col, Row } from "reactstrap";
import "../../../assets/scss/pages/users.scss";
import poweredby from "../../../assets/img/logo/poweredby.png";

function ComparePrescription() {
  return (
    <>
      <div className="container">
        <h3>Compare Prescription</h3>

        <div className="mainheading mt-1">
          <p style={{ fontSize: "11px" }}>
            <b>
              {" "}
              THE SERVICES PROVIDED BY GOODRX ARE NOT INSURANCE AND ARE NOT
              AFFILIATED WITH CRUM & FORSTER SPC. THIS IS NOT AN INSURANCE
              PRODUCT
            </b>
          </p>
        </div>
        <section>
          <div className="comparepresinput">
            <Row className="inputtextvalue">
              <Col>
                <label>Drug Name</label>

                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter Drug Name"
                />
              </Col>
              <Col>
                <label>Zip Code</label>

                <input
                  onKeyDown={(e) => {
                    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();
                  }}
                  min={0}
                  className="form-control"
                  type="number"
                  placeholder="Enter Zip Code"
                />
              </Col>
            </Row>
            <Row className="mt-2">
              <Col>
                <div className="d-flex justify-content-center">
                  <Button color="primary">Get Prices</Button>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="d-flex justify-content-end">
                  <img width={90} src={poweredby} alt="images" />
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </div>
    </>
  );
}

export default ComparePrescription;
