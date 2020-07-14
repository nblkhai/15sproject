import React from "react";
import "../Login/Login.css";
import "../Home/Home.css"
import { connect } from "react-redux";
import Cookies from "universal-cookie";
import {EditProfileHandler} from "../../redux/actions"


class EditProfile extends React.Component {
  state = {
    EditProfileForm: {
      firstName:"",
       lastName:"", 
       userName:"", 
       password:"", 
       emailAddress:"",
       phoneNumber:"",
      showPassword: false,
    },
  };
  editProfileBtnHandler = () => {
    console.log("EditProfile")
    const {firstName, lastName, userName, password, emailAddress,phoneNumber } = this.state.EditProfileForm;
    let newUser = {
      firstName, 
      lastName,
      userName,
      password,
      emailAddress,
      phoneNumber
    };
    this.props.onEditProfile(newUser);
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
                  <h3>Edit</h3>
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
                        value={this.state.EditProfileForm.firstName}
                        placeholder="First Name"
                        onChange={(e) => this.inputHandler(e, "firstName",  "EditProfileForm")}
                      />
                    </div>
                    <div className="col-md-12 form-group p_star">
                      <h5>Last Name</h5>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.EditProfileForm.lastName}
                        placeholder="Last Name"
                        onChange={(e) => this.inputHandler(e, "lastName","EditProfileForm")}
                      />
                    </div>
                    <div className="col-md-12 form-group p_star">
                      <h5>Username</h5>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.EditProfileForm.userName}
                        placeholder="Username"
                        onChange={(e) => this.inputHandler(e, "userName","EditProfileForm")}
                      />
                    </div>
                    <div className="col-md-12 form-group p_star">
                      <h5>Password</h5>
                      <input
                        type="password"
                        className="form-control"
                       
                        value={this.state.EditProfileForm.password}
                        placeholder="Password"
                        onChange={(e) => this.inputHandler(e, "password","EditProfileForm")}
                      />
                    </div>
                    <div className="col-md-12 form-group p_star">
                      <h5>Email</h5>
                      <input
                        type="text"
                        className="form-control"
                       
                        value={this.state.EditProfileForm.em}
                        placeholder="Email"
                        onChange={(e) => this.inputHandler(e, "emailAddress","EditProfileForm")}
                      />
                    </div>
                    <div className="col-md-12 form-group p_star">
                      <h5>Phone Number</h5>
                      <input
                        type="text"
                        className="form-control"
                       
                        vvalue={this.state.EditProfileForm.phoneNumber}
                        placeholder="Phone Number"
                        onChange={(e) => this.inputHandler(e, "phoneNumber","EditProfileForm")}
                      />
                    </div>
                    <div className="col-md-12 form-group">
                      <div className="btn_3" onClick={this.editProfileBtnHandler}>
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

export default connect(mapStateToProps)(EditProfile);
