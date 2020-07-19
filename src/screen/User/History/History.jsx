import React from "react";
import Axios from "axios";
import { API_URL } from "../../../constants/API";
import { connect } from "react-redux";
import "../History/History.css"
import { Modal, ModalHeader, ModalBody } from "reactstrap";

class History extends React.Component {

  state = {
    modalOpen: false,
    historyList: [],
    active:[],
    selectedFile: null,
    status:false,
    transactionId: null,
  };
  toggleModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  uploadHanlder = (transactionId) => {
    this.setState({ 
      modalOpen: true,
      transactionId:transactionId,
     });
  };

  fileChangedHandler = (e) => {
    this.setState({ selectedFile: e.target.files[0] })
}

  uploadBuktiTrasfer = (transactionId) => {  
    let formData = new FormData();
    formData.append(
      "file",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
    console.log(this.state.selectedFile.name);

    Axios.put(
      `${API_URL}/transactions/uploadBuktiTransfer/${transactionId}`,
      formData
    )
      .then((res) => {
        alert("masuk")
        console.log(res.data);
        this.toggleModal();
        this.gethistoryList();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  gethistoryList = () => {
    Axios.get(
      `${API_URL}/transactions/user/${this.props.user.id}`
    )
      .then((res) => {
        this.setState({ historyList: res.data });
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.gethistoryList();
  }

  renderHistoyList = () => {
    return this.state.historyList.map((val, idx) => {
      const { id, totalPrice, statusPayment, transansactionDetails ,dateBooking} = val;
      return (
        <>
          <tr
            onClick={() => {
              if (this.state.active.includes(idx)) {
                this.setState({
                  active: [...this.state.active.filter((item) => item !== idx)],
                });
              } else {
                this.setState({
                  active: [...this.state.active, idx],
                });
              }
            }}
          >
            <td>{idx + 1}</td>
            <td>
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(totalPrice)}{" "}
            </td>
            {val.buktiTransfer ? (
              (val.statusPayment == 1 ? (
                <td>Thank You!</td>
              ) : (
                <td>Wait for Admin Respon</td>
              ))
            ) : (
              <td>
                <input type="button" onClick={(e) => this.uploadHanlder(val.id)}  className="btn_3" value="Upload Foto" />
              </td>
            )}
          </tr>
          {transansactionDetails.map((val) => {
            return (
              <tr
                className={`collapse-item ${
                  this.state.active.includes(idx) ? "active" : null
                }`}
              >
                <td className="" colSpan={5}>
                  <div className="d-flex flex-column ml-4 justify-content-center">
                    <h5> Package Name : 
                      <span style={{ fontWeight: "normal" }} >{val.products.packageName}
                        </span ></h5>
                    <h5> Package Duration:  <span style={{ fontWeight: "normal" }} >{val.products.packageDuration}
                        </span ></h5>
                    <h5> Package Description :<span style={{ fontWeight: "normal" }} > {val.products.packageDesc}
                        </span ></h5>
                    <h5>Package Category :<span style={{ fontWeight: "normal" }} > {val.products.packageCategory}
                        </span ></h5>
              <h5> Date Booking : <span style={{ fontWeight: "normal" }} > {dateBooking}
                        </span ></h5>
                  </div>
                </td>
              </tr>
            );
          })}
        </>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <div className="cart_area section_padding">
          <div className="text-center tokolapak-heading">
            <h2>
              <span>User History</span>
            </h2>
          </div>
          <div className="cart_inner">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    {/* <th scope="col">No</th> */}

                    <th scope="col">No</th>
                    <th scope="col">Total Price</th>
                    <th scope="col">Status</th>
         
                  </tr>
                </thead>
    <tbody>{this.renderHistoyList()}</tbody>
              </table>
              <Modal
                        toggle={this.toggleModal}
                        isOpen={this.state.modalOpen}>
                        <ModalHeader toggle={this.toggleModal}>
                            <caption>
                                <h3>Upload Bukti Transfer</h3>
                            </caption>
                        </ModalHeader>
                        <ModalBody>
                            <input type="file" onChange={this.fileChangedHandler} />
                            <input type="button" onClick={() => this.uploadBuktiTrasfer(this.state.transactionId)} className="upload-btn" value="Upload" />
                            <br />
                            <br />
                            <input type="button" onClick={this.toggleModal} className="upload-btn" value="Cancel" />
                        </ModalBody>
                    </Modal>
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

export default connect(mapStateToProps)(History);
