import React from "react";
import { API_URL } from "../../../constants/API";
import Axios from "axios";
import { connect } from "react-redux";
import Cookies from "universal-cookie";
// import {EditProfileHandler} from "../../redux/actions"


class EditProfile extends React.Component {
  state = {
    EditProfileForm: {
      firstName:"",
       lastName:"", 
       phoneNumber:"",
      showPassword: false,
    },
    listProfile: [],
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

  getUserId = () => {
    Axios.get(`${API_URL}/users/${this.props.user.id}`)
      .then((res) => {
        this.setState({
          listProfile: res.data,
        });
        console.log(this.state.listProfile);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  
  componentDidUpdate() {
    this.getUserId()
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
                <div className="login_part_form_iner mt-5">
                  <h3>Edit Profile</h3>
                  <form
                    className="row contact_form"
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
                        disabled
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
                       disabled
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
                        disabled
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
                      <div className="btn_3">
                        Edit Profile
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
