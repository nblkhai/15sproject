import React, { Component } from "react";
import { Link } from "react-router-dom";
import ButtonUI from "../../components/Button/Button";
import { connect } from "react-redux";
import Cookies from "universal-cookie";
import {loginHandler} from "../../redux/actions"
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import TextField from "../../components/TextField/TextField"
import Axios from "axios";
import { API_URL } from "../../constants/API";
import swal from "sweetalert"

class Login extends React.Component {
    state = {
        loginForm: {
          userName: "",
          password: "",
          showPassword: false,
        },
        forgotPassword: {
          emailAddress: "",
        },
        modalOpen: false,
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
      toggleModal = () => {
        this.setState({ modalOpen: !this.state.modalOpen });
      };
      componentDidUpdate() {
        if (this.props.user.id) {
          const cookie = new Cookies();
          cookie.set("authData", JSON.stringify(this.props.user), { path: "/" });
        }
      }

      loginBtnHandler = () => {
        console.log("Login")
        const { userName, password } = this.state.loginForm;
        let newUser = {
          userName,
          password,
        };
    
        this.props.onLogin(newUser);
      };
      sendEmailHandler = () => {
        console.log(this.state.forgotPassword.emailAddress);
        Axios.get(`${API_URL}/user/email/${this.state.forgotPassword.emailAddress}`)
          .then((res) => {
            console.log(res.data);
            swal("Success", "Check Email", "success");
          })
          .catch((err) => {
            console.log(err);
          });
      };
  render() {
    return (
      <div className="container">
        <div className="login_part section_padding ">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                    <div className="login_part_text text-center">
                        <div className="login_part_text_iner">
                            <h2>Create New Member?</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At magni sit beatae sequi magnam explicabo molestias nemo fugiat, pariatur possimus quia maxime ut culpa? Velit minima ad hic enim rem.</p>
                            
                            <div className="btn_3"><Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to="/Register"
                  >
                    Create an Account
                  </Link></div>
                        
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="login_part_form">
                        <div className="login_part_form_iner">
                            <h3>Hello Good To See You Again!<br/>
                                Please Sign in now</h3>
                            <form className="row contact_form" action="#" method="post" novalidate="novalidate">
                                <div className="col-md-12 form-group p_star">
                                    <input type="text" className="form-control" value={this.state.loginForm.username}
            onChange={(e) => this.inputHandler(e, "userName", "loginForm")}
                                        placeholder="Username"/>
                                </div>
                                <div className="col-md-12 form-group p_star">
                                    <input type="password" className="form-control"value={this.state.loginForm.username}
            onChange={(e) => this.inputHandler(e, "password", "loginForm")}
                                        placeholder="Password"/>
                                </div>
                                <div className="col-md-12 form-group">
                                    <div className="creat_account d-flex align-items-center">
                                        {/* <input type="checkbox" id="f-option" name="selector"/>
                                        <label for="f-option">Remember me</label> */}
                                        <Link style={{ textDecoration: "none", color: "inherit" }}   onClick={this.toggleModal}>
                                    <a className="nav-link mb-2 small" >Forgot Your Password?</a>
                                </Link>
                                    </div>
                                    <div className="btn_3"   onClick={this.loginBtnHandler}>Log In</div>
                        
                                </div>
                            </form>
                        </div>
                    </div>
                    <Modal
          toggle={this.toggleModal}
          isOpen={this.state.modalOpen}
          className="edit-modal"
        >
          <ModalHeader toggle={this.toggleModal}>
            <caption>
              <h3>Forgot Password</h3>
            </caption>
          </ModalHeader>
          <ModalBody>
            <div className="row justify-content-center">
              <TextField
                value={this.state.forgotPassword.emailAddress}
                placeholder="emailAddress"
                onChange={(e) => this.inputHandler(e, "emailAddress", "forgotPassword")}
              />
            </div>
            <ButtonUI
              className="w-100"
              onClick={this.sendEmailHandler}
              type="outlined"
            >
             Send Email
            </ButtonUI>
          </ModalBody>
        </Modal>
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
    onLogin: loginHandler,
  };
  export default connect(mapStateToProps, mapDispatchToProps)(Login);
  