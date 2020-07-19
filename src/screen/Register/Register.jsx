import React from "react";
import "../Login/Login.css";
import "../Home/Home.css"
import { connect } from "react-redux";
import Cookies from "universal-cookie";
import {registerHandler} from "../../redux/actions"


class Register extends React.Component {
  state = {
    registerForm: {
      firstName:"",
       lastName:"", 
       userName:"", 
       password:"", 
       emailAddress:"",
       phoneNumber:"",
      showPassword: false,
    },
  };
  registerBtnHandler = () => {

    const {firstName, lastName, userName, password, emailAddress,phoneNumber } = this.state.registerForm;
    let newUser = {
      firstName, 
      lastName,
      userName,
      password,
      emailAddress,
      phoneNumber
    };
    this.props.onRegister(newUser);
  };

  inputHandler = (e, field, form) => {
    console.log("Masuk")
    const { value } = e.target;
    this.setState({
      [form]: {
        ...this.state[form],
        [field]: value,
      },
    });
    console.log(e.target);
  };
  componentDidUpdate() {
    if (this.props.user.id) {
      const cookie = new Cookies();
      cookie.set("authData", JSON.stringify(this.props.user), { path: "/" });
    }
  }
  render() {
    return (
      
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="login_part_form">
                <div className="login_part_form_iner">
                  <h3>Registration Form</h3>
                  <form
                    className="row contact_form"
                    action="#"
                    method="post"
                    novalidate="novalidate"
                  >
                    <div className="col-md-12 form-group p_star">
                      <h5>First Name</h5>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.registerForm.firstName}
                        placeholder="First Name"
                        onChange={(e) => this.inputHandler(e, "firstName",  "registerForm")}
                      />
                    </div>
                    <div className="col-md-12 form-group p_star">
                      <h5>Last Name</h5>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.registerForm.lastName}
                        placeholder="Last Name"
                        onChange={(e) => this.inputHandler(e, "lastName","registerForm")}
                      />
                    </div>
                    <div className="col-md-12 form-group p_star">
                      <h5>Username</h5>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.registerForm.userName}
                        placeholder="Username"
                        onChange={(e) => this.inputHandler(e, "userName","registerForm")}
                      />
                    </div>
                    <div className="col-md-12 form-group p_star">
                      <h5>Password</h5>
                      <input
                        type="password"
                        className="form-control"
                       
                        value={this.state.registerForm.password}
                        placeholder="Password"
                        onChange={(e) => this.inputHandler(e, "password","registerForm")}
                      />
                    </div>
                    <div className="col-md-12 form-group p_star">
                      <h5>Email</h5>
                      <input
                        type="text"
                        className="form-control"
                       
                        value={this.state.registerForm.em}
                        placeholder="Email"
                        onChange={(e) => this.inputHandler(e, "emailAddress","registerForm")}
                      />
                    </div>
                    <div className="col-md-12 form-group p_star">
                      <h5>Phone Number</h5>
                      <input
                        type="text"
                        className="form-control"
                       
                        vvalue={this.state.registerForm.phoneNumber}
                        placeholder="Phone Number"
                        onChange={(e) => this.inputHandler(e, "phoneNumber","registerForm")}
                      />
                    </div>
                    <div className="col-md-12 form-group">
                      <div className="btn_3" onClick={this.registerBtnHandler}>
                        Create an Account
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
   
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = {
  onRegister: registerHandler,
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);
