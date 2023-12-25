import React from "react";
import {
  Row,
  Col,
  Button,
  Form,
  Label,
  Input,
  Card,
  CardTitle,
} from "reactstrap";
import "../../../assets/scss/pages/users-profile.scss";
import adminpimg from "../../../assets/img/admin.png";
import CheckBoxesVuexy from "../../../components/@vuexy/checkbox/CheckboxesVuexy";
import { Check } from "react-feather";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";

import swal from "sweetalert";
import axiosConfig from "../../../axiosConfig";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: "",
      LastName: "",
      Age: "",
      Gender: "",
      email: "",
      CellPhone: "",
      Maritalstatus: "",
      occupation: "",
      cnfmPassword: "",
      password: "",
      adminimg: "",
      selectedName: "",
      selectedFile: null,
      data: {},
    };
  }

  //Image Submit Handler
  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
  };

  componentDidMount() {
    let adminId = localStorage.getItem("userId");
    axiosConfig
      .get(`/admin/viewoneadmin/${adminId}`)
      .then((response) => {
        this.setState({
          data: response.data.data,
          name: response.data.data.name,
          email: response.data.data.email,
          mobile: response.data.data.mobile,
          password: response.data.data.password,
          cnfmPassword: response.data.data.cnfmPassword,
        });
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    let adminId = localStorage.getItem("userId");
    e.preventDefault();

    const data = new FormData();
    data.append("name", this.state.name);
    data.append("email", this.state.email);
    data.append("mobile", this.state.mobile);
    data.append("password", this.state.password);
    data.append("cnfmPassword", this.state.cnfmPassword);
    if (this.state.selectedFile !== null) {
      data.append("adminimg", this.state.selectedFile, this.state.selectedName);
    }
    axiosConfig
      .post(`admin/editAdmin/${adminId}`, data, {
        headers: {
          "member-token": localStorage.getItem("member-token"),
        },
      })
      .then((response) => {
        console.log(response.data);
        swal("Success!", "Submitted SuccessFull!", "success");
        window.location.reload("/#/pages/profile");
      })

      .catch((error) => {
        swal("Error!", "You clicked the button!", "error");
        console.log(error.response);
      });
  };
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Profile"
          breadCrumbParent="Pages"
          breadCrumbActive="Profile"
        />
        <div id="user-profile">
          <Row className="m-0 justify-content-center">
            <Col lg="4" md="4" xl="4" sm="12">
              <Card className="bg-authentication rounded-0 mb-0 w-100">
                <div className="profile-img text-center st-1">
                  <img
                    src={
                      this.state.data?.adminimg
                        ? this.state.data?.adminimg
                        : adminpimg
                    }
                    alt="adminimg"
                    className="rounded-circle"
                    width="150"
                    height="150"
                  />
                  <ul className="lst-1">
                    <li className="lst-2">
                      Name:
                      <span className="lst-3">{this.state.data.name}</span>
                    </li>
                    <li className="lst-2">
                      Mobile:
                      <span className="lst-3">{this.state.data.mobile}</span>
                    </li>
                    <li className="lst-2">
                      Email:
                      <span className="lst-3">{this.state.data.email}</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </Col>
            <Col
              sm="12"
              xl="8"
              lg="8"
              md="8"
              className="d-flex justify-content-center"
            >
              <Card className="bg-authentication rounded-0 mb-0 w-100">
                <Form className="m-1" onSubmit={this.submitHandler}>
                  <div className="st-2">
                    <CardTitle>
                      <h4 className="mb-3">Edit Profile</h4>
                      <Col></Col>
                    </CardTitle>
                    <Row className="m-0">
                      <Col sm="12" className="p-0">
                        <Label>First Name</Label>
                        <Input
                          type="text"
                          name="FirstName"
                          placeholder="First Name"
                          value={this.state.FirstName}
                          onChange={this.changeHandler}
                        />
                        <Label>Last Name</Label>
                        <Input
                          type="text"
                          name="LastName"
                          placeholder="Last Name"
                          value={this.state.LastName}
                          onChange={this.changeHandler}
                        />
                        <Label>Age</Label>
                        <Input
                          type="text"
                          name="Age"
                          placeholder="Age"
                          value={this.state.Age}
                          onChange={this.changeHandler}
                        />
                        <Label>Email</Label>
                        <Input
                          type="email"
                          name="email"
                          placeholder="email"
                          value={this.state.email}
                          onChange={this.changeHandler}
                        />
                        <Label>CellPhone.</Label>
                        <Input
                          type="number"
                          name="CellPhone"
                          placeholder="CellPhone no..."
                          value={this.state.CellPhone}
                          onChange={this.changeHandler}
                        />
                        <Label>Carrier</Label>
                        <select
                          className="form-control"
                          name="Carrier"
                          value={this.state.Carrier}
                          onChange={this.changeHandler}
                          // id="cars"
                        >
                          <option value="">--Select--</option>
                          <option value="tmobile">T-mobile</option>
                          <option value="boost">Boost</option>
                          <option value="ATT">ATT</option>
                          <option value="verizon">Verizon</option>
                          <option value="sprint">Sprint</option>
                          <option value="virgin">Virgin</option>
                          <option value="metro">Metro PCS</option>
                          <option value="cricket">Cricket</option>
                          <option value="google-fi">Google Fi</option>
                          <option value="us-cellular">US Cellular</option>
                          <option selected="" value="other">
                            Other
                          </option>
                        </select>
                        {/* <Input
                          type="number"
                          name="Carrier"
                          placeholder="Mobile No."
                          value={this.state.Carrier}
                          onChange={this.changeHandler}
                        /> */}
                        <Label>Income</Label>
                        <Input
                          type="number"
                          name="Income"
                          placeholder="Income"
                          value={this.state.Income}
                          onChange={this.changeHandler}
                        />
                        <Label>Occupation</Label>
                        <select
                          className="form-control"
                          name="Occupation"
                          value={this.state.occupation}
                          onChange={this.changeHandler}
                          // id="cars"
                        >
                          <option value="HW">--Select--</option>
                          <option value="HW">Home Maker</option>
                          <option value="Lawyer">Lawyer</option>
                          <option value="Eng">Engineer</option>
                          <option value="Doc">Physician</option>
                          <option value="Teacher">Teacher</option>
                          <option value="Prof">Professor</option>
                          <option value="Govt Service">
                            Government Service
                          </option>
                          <option value="Art">Artist</option>
                          <option value="Bus">Business</option>
                          <option value="SE">Software Professional</option>
                          <option value="Accnts">Accountant</option>
                          <option value="Student">Student</option>
                          <option value="Politician">Politician</option>
                          <option value="Retd">Retired</option>
                          <option value="FAR">Farmer</option>
                          <option selected="" value="oth">
                            Other
                          </option>
                        </select>
                        <Label>Education</Label>
                        <select
                          className="form-control"
                          name="education"
                          value={this.state.education}
                          onChange={this.changeHandler}
                          // id="cars"
                        >
                          <option value="HW">--Select--</option>
                          <option value="HS">High School</option>
                          <option value="BL">BL/LLB</option>
                          <option value="12">Intermediate</option>
                          <option value="BE">Bachelor (other)</option>
                          <option value="MD">Bachelors(Med)</option>
                          <option value="BBS">Bachelor (Bus)</option>
                          <option value="Dip">Diploma</option>
                          <option value="MS">MS</option>
                          <option value="MBA">MBA</option>
                          <option value="MSc_CS">MS Comp Sc</option>
                          <option value="MCA">MCA</option>
                          <option value="Ph.D">Ph.D</option>
                          <option selected="" value="Oth">
                            Other
                          </option>
                        </select>
                        <Label>Gender</Label>
                        <select
                          className="form-control"
                          name="Gender"
                          value={this.state.Gender}
                          onChange={this.changeHandler}
                          // id="cars"
                        >
                          <option value="">--Select--</option>
                          <option selected="" value="M">
                            Male
                          </option>
                          <option value="F">Female</option>
                        </select>
                        <Label>Marital Status</Label>
                        <select
                          className="form-control"
                          name="Maritalstatus"
                          value={this.state.Maritalstatus}
                          onChange={this.changeHandler}
                          // id="cars"
                        >
                          <option value="">--Select--</option>
                          <option value="M">Married</option>
                          <option value="W">Widowed</option>
                          <option value="D">Divorced</option>
                          <option selected="" value="NM">
                            Never Married
                          </option>
                        </select>
                        <Label>User Image</Label>
                        <Input
                          className="form-control"
                          type="file"
                          name="adminimg"
                          onChange={this.onChangeHandler}
                        />
                        <CheckBoxesVuexy
                          color="primary"
                          icon={<Check className="vx-icon" size={16} />}
                          label=" I accept the terms & conditions."
                          defaultChecked={true}
                        />
                        <div className="d-flex justify-content-between">
                          <Button.Ripple color="primary" type="submit">
                            Update
                          </Button.Ripple>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Form>
              </Card>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}
export default Profile;
