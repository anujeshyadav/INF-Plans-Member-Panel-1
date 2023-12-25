import React from "react";
import { Row, Col, Card, CardTitle, CardText } from "reactstrap";
import SalesCard from "./SalesCard";

import axiosConfig from "../../../axiosConfig";
import "../../../assets/scss/pages/dashboard-analytics.scss";
import { FaBars } from "react-icons/fa";
import {
  AiTwotoneStar,
  AiOutlineShoppingCart,
  AiFillEye,
} from "react-icons/ai";
// FaBars
class AnalyticsDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total7sayplan: {},
      activetrade: {},
      Completetrade: {},
      Activeuser: {},
      endtoend: {},
      day7planearnig: {},
      basicplanearning: {},
      freeusers: {},
      total: {},
      weekly: {},
      thirtydays: {},
    };
  }

  componentDidMount() {
    // //end dealer //
    axiosConfig
      .get("/admin/totlactivetrade")
      .then((response) => {
        this.setState({ activetrade: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    axiosConfig
      .get("/admin/ttlCompletetrade")
      .then((response) => {
        this.setState({ Completetrade: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    axiosConfig
      .get("/admin/ttlfreeusers")
      .then((response) => {
        this.setState({ freeusers: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
    axiosConfig
      .get("/admin/today_profit_loss")
      .then((response) => {
        this.setState({ total: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    axiosConfig
      .get("/admin/weekely_profit_loss")
      .then((response) => {
        this.setState({ weekly: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
    axiosConfig
      .get("/admin/monthly_profit_loss")
      .then((response) => {
        this.setState({ thirtydays: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    axiosConfig
      .get("/admin/ttlActiveuser")
      .then((response) => {
        this.setState({ Activeuser: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <React.Fragment>
        <Row className="my-2">
          <Col lg="12" md="12">
            <h2>Dashboard</h2>
            {/* <SalesCard /> */}
          </Col>
        </Row>

        <Row className="match-height">
          <Col lg="4" md="12">
            <Card
              className="bg customclassforhover"
              body
              inverse
              style={{ borderColor: "white", height: "100px" }}
            >
              <CardTitle className="mb-1" tag="h4" style={{ color: "black" }}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                  className=""
                >
                  <div className="">PREFILLED APPS</div>
                  <div className="">
                    {" "}
                    <FaBars size={25} color="red" />
                  </div>
                </div>
              </CardTitle>

              <CardText tag="h3" style={{ color: "white" }}>
                {this.state.activetrade.data}
              </CardText>
            </Card>
          </Col>
          <Col lg="4" md="12">
            <Card
              className="bg customclassforhover"
              body
              inverse
              style={{ borderColor: "white", height: "100px" }}
            >
              <CardTitle className="mb-1" tag="h4" style={{ color: "black" }}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                  className=""
                >
                  <div className=""> APPLIED CLAIMS</div>
                  <div className="">
                    {" "}
                    <AiTwotoneStar size={25} color="#31708f" />
                  </div>
                </div>
              </CardTitle>

              <CardText tag="h3" style={{ color: "white" }}>
                {this.state.activetrade.data}
              </CardText>
            </Card>
          </Col>
          <Col lg="4" md="12">
            <Card
              className="bg customclassforhover"
              body
              inverse
              style={{ borderColor: "white", height: "100px" }}
            >
              <CardTitle className="mb-1" tag="h4" style={{ color: "black" }}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                  className=""
                >
                  <div className=""> TO EXTEND</div>
                  <div className="">
                    {" "}
                    <AiOutlineShoppingCart size={25} color="#8a6d3b" />
                  </div>
                </div>
              </CardTitle>

              <CardText tag="h3" style={{ color: "white" }}>
                {this.state.Completetrade.data}
              </CardText>
            </Card>
          </Col>
          <Col lg="4" md="12">
            <Card
              className="bg customclassforhover"
              body
              inverse
              style={{ borderColor: "white", height: "100px" }}
            >
              <CardTitle className="mb-1" tag="h4" style={{ color: "black" }}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                  className=""
                >
                  <div className=""> VISITS</div>
                  <div className="">
                    {" "}
                    <AiFillEye color="#337ab7" size={25} />
                  </div>
                </div>
              </CardTitle>
              <CardText tag="h3" style={{ color: "white" }}>
                {this.state.Activeuser.data}
              </CardText>
            </Card>
          </Col>
          {/* <Col lg="4" md="12">
            <Card
              className="bg-primary"
              body
              inverse
              style={{ borderColor: "white" }}
            >
              <CardTitle className="mb-1" tag="h4" style={{ color: "white" }}>
                Total Free Users
              </CardTitle>
              <CardText tag="h3" style={{ color: "white" }}>
                {this.state.freeusers.data}
              </CardText>
            </Card>
          </Col>
          <Col lg="4" md="12">
            <Card
              className="bg-primary"
              body
              inverse
              style={{ borderColor: "white" }}
            >
              <CardTitle className="mb-1" tag="h4" style={{ color: "white" }}>
                Total Today P/L
              </CardTitle>

              <CardText tag="h3" style={{ color: "white" }}>
                {this.state.total.total_prft_loss}
              </CardText>
            </Card>
          </Col>
          <Col lg="4" md="12">
            <Card
              className="bg-primary"
              body
              inverse
              style={{ borderColor: "white" }}
            >
              <CardTitle className="mb-1" tag="h4" style={{ color: "white" }}>
                Total Weekly P/L
              </CardTitle>

              <CardText tag="h3" style={{ color: "white" }}>
                {this.state.weekly.weekly_profit_loss}
              </CardText>
            </Card>
          </Col>
          <Col lg="4" md="12">
            <Card
              className="bg-primary"
              body
              inverse
              style={{ borderColor: "white" }}
            >
              <CardTitle className="mb-1" tag="h4" style={{ color: "white" }}>
                Total Monthly P/L
              </CardTitle>

              <CardText tag="h3" style={{ color: "white" }}>
                {this.state.thirtydays.thirtydays_prft_loss}
              </CardText>
            </Card>
          </Col> */}
        </Row>

        <Row>
          <Col sm="12">{/* <Notification />  */}</Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default AnalyticsDashboard;
