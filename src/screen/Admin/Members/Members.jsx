import React from "react";
import "../Members/Members.css";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import TextField from "../../../components/TextField/TextField.css";

class Members extends React.Component {
  state = {
    modalOpen: false,
  };
  toggleModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };
  editBtnHandler = (idx) => {
    this.setState({
      editForm: {
        ...this.state.userList[idx],
      },
      modalOpen: true,
    });
  };
  render() {
    return (
      <div className="cart_area">
        <div className="text-center tokolapak-heading">
          <h2>
            <span>Members</span>
          </h2>
        </div>
        <div className="container">
          <div className="cart_inner">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Username</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Mobile Phone</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody><tr><td>
                                    <h5>adirach14</h5>
                                </td>
                                <td>
                                    <p>Adi</p>
                                </td>
                                <td>
                                    <p>Rachmanto</p>
                                </td>
                                
                                <td>
                                    <h5>adirachmato14@gmail.com</h5>
                                </td>
                                <td>
                                    <h5>08574213243</h5>
                                </td>
                                <td>
                                    <div class="genric-btn info circle" onClick={this.editBtnHandler} >Edit</div>
                                    <div class="genric-btn danger circle">Delete</div>
                                </td>
                            </tr></tbody>
                <div className="genric-btn primary circle">Create Account</div>
              </table>
              <Modal isOpen={this.state.modalOpen} className="edit-modal">
                <ModalHeader toggleModal={this.toggleModal}>
                  <caption>
                    <h3>Edit Members</h3>
                  </caption>
                </ModalHeader>
                <ModalBody>
                  <div className="row">
                    <div className="col-12">
                      <TextField placeholder="username" />
                    </div>
                    <div className="col-12 mt-3">
                      <TextField placeholder="First Name" />
                    </div>
                    <div className="col-12 mt-3">
                      <TextField placeholder="Last Name" />
                    </div>
                    <div className="col-12 mt-3">
                      <TextField placeholder="Email" />
                    </div>
                    <div className="col-12 mt-3">
                      <TextField placeholder="Phone Numbers" />
                    </div>
                    <div className="col-5 mt-5 offset-1">
                      <div className="w-100 genric-btn primary circle">
                        Cancel
                      </div>
                    </div>
                    <div className="col-5 mt-5">
                      <div className="w-100 genric-btn primary circle">
                        Save
                      </div>
                    </div>
                  </div>
                </ModalBody>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Members;
