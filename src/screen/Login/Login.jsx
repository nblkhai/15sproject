import React, { Component } from "react";
import { Link } from "react-router-dom";
import ButtonUI from "../../components/Button/Button";
import { connect } from "react-redux";
import Cookies from "universal-cookie";
import {loginHandler} from "../../redux/actions"

class Login extends React.Component {
    state = {
        loginForm: {
          userName: "",
          password: "",
          showPassword: false,
        },
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

      loginBtnHandler = () => {
        console.log("Login")
        const { userName, password } = this.state.loginForm;
        let newUser = {
          userName,
          password,
        };
    
        this.props.onLogin(newUser);
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
                                        <input type="checkbox" id="f-option" name="selector"/>
                                        <label for="f-option">Remember me</label>
                                    </div>
                                    <div className="btn_3"   onClick={this.loginBtnHandler}>Log In</div>
                        
                                </div>
                            </form>
                        </div>
                    </div>
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
  