import React, { useEffect, useState } from "react";
import "../../../assets/scss/pages/users.scss";
import axiosConfig from "../../../axiosConfig";
import { Button, Col, Row } from "reactstrap";

const GetnewPlans = () => {
  const [CurrentDate, setCurrentDate] = useState("");
  useEffect(() => {
    const date = new Date().toISOString();
    setCurrentDate(date.split("T")[0]);
  }, []);
  //   const params = {
  //     effect: "fade",
  //     loop: true,
  //     speed: 1000,
  //     autoplay: {
  //       delay: 5000,
  //       disableOnInteraction: false,
  //     },
  //     watchSlidesVisibility: true,

  //     renderPrevButton: () => (
  //       <button className="swiper-button-prev ht-swiper-button-nav">
  //         <i className="pe-7s-angle-left" />
  //       </button>
  //     ),
  //     renderNextButton: () => (
  //       <button className="swiper-button-next ht-swiper-button-nav">
  //         <i className="pe-7s-angle-right" />
  //       </button>
  //     ),
  //   };
  return (
    <div className="topheading mt-20  px-1 py-2">
      <div className="startinghere">
        <div>
          <Row className="customclass">
            <Col className="customcolstyle" lg="2" sm="6" md="6">
              <lable className="dates">
                <b>Start Date</b>
              </lable>
              <input
                type="date"
                // min="2019-01-01"
                min={CurrentDate && CurrentDate}
                name="cqs-date"
                className=" mt-1 mb-2 form-control"
              />
            </Col>
            <Col className="customcolstyle" lg="2" sm="6" md="6">
              <lable className="dates mb-2">
                <b>End Date </b>
              </lable>
              <input
                type="date"
                name="cqs-date"
                min={CurrentDate && CurrentDate}
                className="dropped form-control mt-1 mb-2 "
                data-toggle="dropdown"
              />
            </Col>

            <Col className="customcolstyle mb-2" lg="5" sm="6" md="6">
              <lable className="CoverageArea mb-1">
                {" "}
                <b>Coverage Area</b>
              </lable>

              <details className="DetailsDropdown">
                <summary className="mt-1">
                  <b> Coverage (for:International ,Below:)</b>
                </summary>
                <div className="">
                  <label color="black" className="date">
                    Area:
                  </label>
                  <select
                    class="form-control form-select"
                    aria-label="Default select example"
                  >
                    <option selected value="1">
                      One
                    </option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="">
                  <label color="black">Maximum:</label>
                  <select
                    class="form-control form-select "
                    aria-label="Default select example"
                  >
                    <option selected value="1">
                      One
                    </option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </details>
            </Col>
            <Col className="customcolstyle mt-1" lg="3" sm="12" md="12">
              <lable className="CoverageArea mb-2">
                {" "}
                <b>DOB</b>
              </lable>
              <input
                max={CurrentDate && CurrentDate}
                type="date"
                name="cqs-date"
                className="dropped form-control mt-1 mb-2"
              />
            </Col>
          </Row>
          <Row
            style={{ backgroundColor: "#252362", height: "80px" }}
            className="inputandsubmit"
          >
            {/* <Col lg="12"> */}
            {/* <div className="inputboxandsubmit"> */}
            {/* <Row> */}
            <Col className="" lg="8" sm="8" md="8" xs="6">
              {" "}
              <div className="emailidinput">
                <input
                  className="form-control inputfields mt-1"
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  //   className="EmailInput"
                />
              </div>
            </Col>
            <Col>
              <div className="buttonclass mt-1">
                <Button color="primary" className="custombtn2 ">
                  Get Quote
                </Button>
                <div>
                  <span className="quoteinclusion">
                    Quote is inclusive of all fees
                  </span>
                </div>
              </div>
            </Col>
            {/* </Row> */}
            {/* </div> */}
            {/* </Col> */}
          </Row>
        </div>
      </div>
      {/* <div className="slider-active nav-style-1">
        <section
          class="home-hero-section-bg"
          alt="Find the righ  t coverage for your trip"
          id="home-hero-section-background"
        >
          <div id="home-hero-section">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <h1 class="text-white text-center">
                    FIND THE RIGHT COVERAGE <br />
                    FOR YOUR TRIP WORLDWIDE
                  </h1>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="get-a-quote-container row py-2">
                  <div className="form-group col-md-3 col-xs-12 qelement">
                    <div input-group input-daterange id="cFrom">
                      <div className="form-row">
                        <div className="row ">
                          <div className="col-md-6 col-lg-6 pl-0 start-date-title ">
                            <lable className="dates">Start Date</lable>
                            <input
                              type="date"
                              name="cqs-date"
                              className="dropped form-control"
                            />
                          </div>
                          <div className="col-md-6 col-lg-6 pl-0 start-date-title ">
                            <lable className="dates">End Date</lable>
                            <input
                              type="date"
                              name="cqs-date"
                              className="dropped form-control"
                              data-toggle="dropdown"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <lable className="CoverageArea">Coverage Area</lable>

                    <details className="DetailsDropdown">
                      <summary>Coverage (for:International ,Below:)</summary>
                      <div className="py-2">
                        <label>Area:</label>
                        <select
                          class="form-control form-select "
                          aria-label="Default select example"
                        >
                          <option selected value="1">
                            One
                          </option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                      <div className="py-2 mt-1">
                        <label>Maximum:</label>
                        <select
                          class="form-control form-select"
                          aria-label="Default select example"
                        >
                          <option selected value="1">
                            One
                          </option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </details>
                  </div>
                  <div className="col-md-4">
                    <lable className="CoverageArea">DOB</lable>
                    <input
                      type="date"
                      name="cqs-date"
                      className="dropped form-control"
                    />
                  </div>
                </div>
                <div
                  className=" row py-4"
                  style={{
                    backgroundColor: "#252362",
                    justifyContent: "center",
                  }}
                >
                  <div className="col-md-5 pt-2 col-xs-12 ">
                    <input
                      type="email"
                      placeholder="Email Address"
                      name="email"
                      className="EmailInput"
                    />
                  </div>
                  <div className="col-md-3">
                    <button className="custombtn2 text-white">Get Quote</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div> */}
    </div>
  );
};

export default GetnewPlans;
