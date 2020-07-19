import React from "react";
import Axios from "axios";
import { connect } from "react-redux";
import { API_URL } from "../../../constants/API";
import swal from "sweetalert"
import {logoutHandler} from "../../../redux/actions/user"
class ForgetPassword extends React.Component {
  state = {
    profileList:[],
    userData: [],
    changePasswordForm: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    userData:{}
  };

  getUserData = () => {
    Axios.get(`${API_URL}/user/id`, {
      params: {
        id: this.props.user.id,
      },
    })
      .then((res) => {
        this.setState({ userData: res.data });
        console.log(this.state.userData.password);
        console.log(this.state.userData);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.getUserData();
  }
  // changePasswordHandler = () => {
  //   Axios.get(`${API_URL}/user/checkOldPassword/${this.props.user.id}`, {
  //     params: {
  //       password: this.state.changePasswordForm.oldPassword,
  //     },
  //   })

  //     .then((res) => {
  //       console.log(res);
  //       Axios.put(`${API_URL}/user/changePassword/${this.props.user.userName}/${this.props.user.oldPassword}/${this.props.user.newPassword}`, {
  //         password: this.state.changePasswordForm.newPassword,
  //         username: this.props.user.userName,
  //         firstName: this.props.user.firstName,
  //         lastName : this.props.user.lastName,
  //         email: this.props.user.emailAddress,
  //         phoneNumber: this.state.phoneNumber,
  //         role: this.props.user.role,
  //       })
  //         .then((res) => {
  //           console.log(res);
  //           swal("success", "Your password successfully changed", "success");
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       swal("error", "Wrong old password", "error");
  //     });
  //   }

  changePasswordHandler = () => {
    const {
      oldPassword,
      newPassword,
      confirmPassword,
    } = this.state.changePasswordForm;

    if (newPassword == confirmPassword) {
      Axios.post(`${API_URL}/user/changePassword`, this.state.profileList, {
        params: {
          oldPass: oldPassword,
          newPass: newPassword,
        },
      })
        .then((res) => {
          console.log("berhasil");
          swal(
            "Password Changed",
            "Your password has been successfully changed, please relogin",
            "success"
          );
          this.props.onLogout();
          console.log(res.data);
        })
        .catch((err) => {
          this.state.changePasswordForm.oldPassword = "";
          this.state.changePasswordForm.newPassword = "";
          this.state.changePasswordForm.confirmPassword = "";
          alert("GAGAL kesalahan sistem");
          console.log(err);
        });
    } else {
      alert("Password tidak cocok");
    }
  };
  inputHandler = (e, field, form) => {
    console.log("Masuk");
    const { value } = e.target;
    this.setState({
      [form]: {
        ...this.state[form],
        [field]: value,
      },
    });
    console.log(e.target);
  };



  render() {
    return (
      <div className="container">
        <center>
          <div className="login_part section_padding ">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                  <div className="login_part_form">
                    <div className="login_part_form_iner">
                      <h3>Change Password</h3>
                      <form
                        className="row contact_form"
                        action="#"
                        method="post"
                        novalidate="novalidate"
                      >
                        <div className="col-md-12 form-group p_star">
                          <input
                            type="password"
                            className="form-control"
                            value={this.state.changePasswordForm.oldPassword}
                            onChange={(e) =>
                              this.inputHandler(
                                e,
                                "oldPassword",
                                "changePasswordForm"
                              )
                            }
                            placeholder="Old Password"
                          />
                        </div>
                        <div className="col-md-12 form-group p_star">
                          <input
                            type="password"
                            className="form-control"
                            value={this.state.changePasswordForm.newPassword}
                            onChange={(e) =>
                              this.inputHandler(
                                e,
                                "newPassword",
                                "changePasswordForm"
                              )
                            }
                            placeholder="New Password"
                          />
                        </div>
                        <div className="col-md-12 form-group p_star">
                          <input
                            type="password"
                            className="form-control"
                            value={this.state.changePasswordForm.confirmPassword}
                            onChange={(e) =>
                              this.inputHandler(
                                e,
                                "confirmPassword",
                                "changePasswordForm"
                              )
                            }
                            placeholder="Confirm Password"
                          />
                        </div>
                        <div className="col-md-12 form-group">
                          <div className="btn_3" onClick={this.changePasswordHandler}>
                            Change Password
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </center>
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
  onLogout: logoutHandler,
};
export default connect(mapStateToProps, mapDispatchToProps)(ForgetPassword);

