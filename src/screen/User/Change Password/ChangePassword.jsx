import React from "react";
import Axios from "axios";
import { connect } from "react-redux";
import { API_URL } from "../../../constants/API";
import swal from "sweetalert"
import ButtonUI from "../../../components/Button/Button";
import TextField from "../../../components/TextField/TextField";

import { Modal, ModalHeader, ModalBody } from "reactstrap";

class ChangePassword extends React.Component {
  state = {
    profileList:[],
    userData: [],
    changePasswordForm: {
      oldPassword: "",
      newPassword: "",
    },
    editMember: {
      id: 0,
      userName: "",
      firstName:"",
      lastName:"",
     phoneNumber:""
    },
    userData:{},
    modalOpen:false
  };

  editProfileHandler = () => {
    Axios.put(`${API_URL}/user/editUser`, this.state.editMember)
      .then((res) => {
        swal("Success!", "Your profile has been edited", "success");
        this.setState({ modalOpen: false });
        this.getUserData();
      })
      .catch((err) => {
        swal("Error!", "Your profile could not be edited", "error");
        console.log(err);
      });
  };
  toggleModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };
  editBtnHandler = () => {
    this.setState({
      editMember: {
        ...this.state.profileList,
      },
      modalOpen: true,
    });
  };

  getUserData = () => {
    Axios.get(`${API_URL}/user/id`, {
      params: {
        id: this.props.user.id,
      },
    })
      .then((res) => {
        this.setState({ profileList: res.data });
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
    const { userName, firstName, lastName, emailAddress, phoneNumber } = this.state.profileList;
    return (
      <div className="container">
        <center>
          <div className="login_part section_padding ">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                  <div className="container">
    <h2>Hello, {userName}</h2>
    <h4>Nama : {firstName} {lastName}</h4>
    <h4>Email : {emailAddress}</h4>
    <h4>Phone Number: {phoneNumber}</h4>
    <ButtonUI
                        onClick={(_) => this.editBtnHandler()}
                        type="contained"
                        className="mt-4 "
                      >
                        Edit Profile
                      </ButtonUI>
                  </div>
                  <Modal
            toggle={this.toggleModal}
            isOpen={this.state.modalOpen}
            className="edit-modal"
          >
            <ModalHeader toggle={this.toggleModal}>
              <caption>
                <h3>Edit Profile</h3>
              </caption>
            </ModalHeader>
            <ModalBody>
              <div className="row">
                <div className="col-6">
                  <TextField
                    value={this.state.editMember.firstName}
                    placeholder="First Name"
                    onChange={(e) =>
                      this.inputHandler(e, "firstName", "editMember")
                    }
                  />
                </div>
                <div className="col-6">
                  <TextField
                    value={this.state.editMember.lastName}
                    placeholder="Last Name"
                    onChange={(e) =>
                      this.inputHandler(e, "lastName", "editMember")
                    }
                  />
                </div>
                <div className="col-6">
                  <TextField
                    value={this.state.editMember.userName}
                    placeholder="username"
                    onChange={(e) =>
                      this.inputHandler(e, "userName", "editMember")
                    }
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12 mt-3">
                  <TextField
                    value={this.state.editMember.emailAddress}
                    placeholder="E-mail"
                    onChange={(e) =>
                      this.inputHandler(e, "emailAddress", "editMember")
                    }
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12 mt-3">
                  <TextField
                    value={this.state.editMember.phoneNumber}
                    placeholder="Phone Number"
                    onChange={(e) =>
                      this.inputHandler(e, "phoneNumber", "editMember")
                    }
                  />
                </div>
              </div>
              <div className="d-flex flex-row py-5 align-item-center">
                <div className=" col-5 mt-3">
                  <ButtonUI
                    className="w-100"
                    onClick={this.editProfileHandler}
                    type="contained"
                  >
                    Save
                  </ButtonUI>
                </div>
                <div className="col-5 mt-3 offset-1">
                  <ButtonUI
                    className="w-100"
                    onClick={this.toggleModal}
                    type="outlined"
                  >
                    Cancel
                  </ButtonUI>
                </div>
              </div>
            </ModalBody>
          </Modal>
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
export default connect(mapStateToProps) (ChangePassword);

