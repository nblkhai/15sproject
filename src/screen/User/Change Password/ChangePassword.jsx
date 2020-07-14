import React from "react";
import Axios from "axios";
import { API_URL } from "../../../constants/API";

class ChangePassword extends React.Component {
  state = {
    userData: [],
    changePasswordForm: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  };

  changePasswordHandler = () => {
    Axios.get(`${API_URL}/user/id`, {
      params: {
        id: this.props.user.id,
      },
    })
      .then((res) => {
        this.setState({ userData: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
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
                        <div className="col-md-12 form-group">
                          <div className="btn_3" onClick={this.loginBtnHandler}>
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
export default ChangePassword;
