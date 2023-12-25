import React from "react";
import { Link } from "react-router-dom";
import { CardBody, FormGroup, Form, Input, Button, Label } from "reactstrap";
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy";
import { Mail, Lock, Check } from "react-feather";
import { loginWithJWT } from "../../../../redux/actions/auth/loginActions";
import "../../../../assets/scss/pages/authentication.scss";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import swal from "sweetalert";
import OtpInput from "react-otp-input";
import axiosConfig from "../../../../axiosConfig";
class LoginJWT extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      // password: "",
      ShowScreen: false,
      showDashBoard: false,
    };
  }
  handlechange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLogin = (e) => {
    const payload = {
      email: this.state.email,
    };
    e.preventDefault();
    // debugger;
    axiosConfig
      .post("/user/memberlogin", payload)
      .then((response) => {
        console.log(response.data);
        this.setState({ ShowScreen: true });
        // if (response.data.status === true) {
        this.setState({ ad_token: response.data.token });
        // swal(response.data.msg);
        // swal("success Data");
        // localStorage.setItem("ad-token", response.data.token);
        localStorage.setItem("MemberId", response.data.id);
        // swal("OTP has been sent to Your Mail Id", "Please Check and verify");
        // window.location.replace("/#/");
        // } else if (response.data.status === 204) {
        //   // swal(response.data.msg);
        //   swal("testting");
        // }
      })

      .catch((error) => {
        console.log(error.response);
        swal(
          "error!",
          "Invalied! Please enter valied Email. or Password",
          "error"
        );
      });
  };

  handleSubmitOTP = async (e) => {
    debugger;
    e.preventDefault();
    let MemberId = localStorage.getItem("MemberId");
    let payload = {
      otp: this.state.emailotp,
    };
    await axiosConfig
      .post(`/user/verifyotp/${MemberId}`, payload)
      .then((res) => {
        localStorage.setItem("member-token", res.data.token);
        console.log(res.data.token);
        swal("Submittted Successfully");
        window.location.replace("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <React.Fragment>
        <CardBody className="pt-1">
          {this.state.ShowScreen ? (
            <>
              <OtpInput
                containerStyle="true inputdata"
                inputStyle="true inputdataone"
                className="otpinputtype"
                value={this.state.emailotp}
                name="emailotp"
                onChange={(otp) => this.setState({ emailotp: otp })}
                numInputs={6}
                renderSeparator={<span>-</span>}
                renderInput={(props) => <input className="inputs" {...props} />}
              />
              <Button
                className="m-4"
                onClick={this.handleSubmitOTP}
                color="primary"
              >
                Verify OTP
              </Button>
            </>
          ) : (
            <>
              <Form onSubmit={this.handleLogin}>
                <FormGroup className="form-label-group position-relative has-icon-left">
                  <Input
                    type="email"
                    name="email"
                    placeholder="E-mail "
                    value={this.state.email}
                    onChange={this.handlechange}
                    required
                  />
                  <div className="form-control-position">
                    <Mail size={15} />
                  </div>
                  <Label>Email </Label>
                </FormGroup>
                {/* <FormGroup className="form-label-group position-relative has-icon-left">
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handlechange}
                required
              />
              <div className="form-control-position">
                <Lock size={15} />
              </div>
              <Label>Password</Label>
            </FormGroup> */}
                <FormGroup className="d-flex justify-content-between align-items-center">
                  <Checkbox
                    color="primary"
                    icon={<Check className="vx-icon" size={16} />}
                    label="Remember me"
                    defaultChecked={false}
                    onChange={this.handleRemember}
                    required
                  />
                  <div className="float-right">
                    <Link to="/pages/forgot-password">Forgot Password?</Link>
                  </div>
                </FormGroup>
                <div className="d-flex justify-content-between">
                  <Route
                    render={({ history }) => (
                      <Button.Ripple color="primary" type="submit">
                        Login
                      </Button.Ripple>
                    )}
                  />
                </div>
              </Form>
            </>
          )}
        </CardBody>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    values: state.auth.login,
  };
};
export default connect(mapStateToProps, { loginWithJWT })(LoginJWT);
