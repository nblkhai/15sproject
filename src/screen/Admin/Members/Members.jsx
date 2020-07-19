import React from "react";
import "../Members/Members.css";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import TextField from "../../../components/TextField/TextField.css";
import Axios from "axios";
import { API_URL } from "../../../constants/API";
class Members extends React.Component {
  state = {
    memberList:[],
    modalOpen: false,
  };
  getMemberList = () => {
    Axios.get(`${API_URL}/user/users`)
      .then((res) => {
        this.setState({ memberList: res.data });
        console.log(res.data)
        console.log(this.state.memberList)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.getMemberList();
    console.log(this.state.memberList)
  }

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
  renderMemberList = () => {
    return this.state.memberList.map((val,idx) => {
        const{
            id,firstName,lastName,userName,emailAddress,phoneNumber
        } = val
        return(
            <>
            <tr>
       
            <td>{id}</td>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{firstName} {lastName}</td>
        <td>{userName}</td>
        <td>{emailAddress}</td>
        <td>{phoneNumber}</td>

        <td>
        <div
          className="list_package_edit.html"
          className="genric-btn info circle"
        >
          Edit
        </div>
        <div  onClick={() => this.deleteBtnHandler(id)} className="genric-btn danger circle">Delete</div>
      </td>
            </tr>
            </>
        )
    })
}

deleteBtnHandler = (userId) => {
  Axios.delete(`${API_URL}/user/deleteUser/${userId}`)
  .then((res) => {
    console.log(res);
    this.getMemberList()
    this.renderMemberList()
  })
  .catch((err) => {
    console.log(err);
  });
}
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
                  <th scope="col">No</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Mobile Phone</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
    <tbody>{this.renderMemberList()}</tbody>
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
