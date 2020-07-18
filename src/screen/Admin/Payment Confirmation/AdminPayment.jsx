import React from "react";
import ButtonUI from "../../../components/Button/Button";
import Axios from "axios";
import { API_URL } from "../../../constants/API";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

class AdminPayment extends React.Component {
  state = {
    trasactionDateDone: new Date(),
    modalOpen: false,
    active: [],
    transactionList: [],
    image: "",
  };

  toggleModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };
  toggleHandler = (e, id, buktiTransfer, idx) => {
    this.setState({ modalOpen: true });
    this.setState({ image: buktiTransfer });
    this.setState({ transactionId: id });
    this.setState({ index: idx });
  };

  getAllTransaction = () => {
    Axios.get(`${API_URL}/transactions`)
      .then((res) => {
        console.log(res.data);
        this.setState({ transactionList: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getAllTransaction();
  }

  acceptHandler = () => {
    alert("ACCEPTED")
    Axios.put(
      `${API_URL}/transactions/acceptTransaction/${
        this.state.transactionId
      }?trasactionDateDone=${this.state.trasactionDateDone.toLocaleDateString()}`
    )
      .then((res) => {
        console.log(res.data);
        this.toggleModal();
        this.getAllTransaction();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  rejectHandler = () => {
    alert("REJECTED")
    Axios.put(`${API_URL}/transactions/rejectTransaction/${this.state.transactionId}`)
        .then((res) => {
            console.log(res.data)
            this.toggleModal()
            this.getAllTransaction()
        })
        .catch((err) => {
            console.log(err)
            console.log(this.state.transactionId)
        })
}


  renderTransaction = () => {
    return this.state.transactionList.map((val, idx) => {
      const { id, totalPrice, statusPayment, transansactionDetails } = val;
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
            <td>{val.user.userName}</td>
            <td>
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(totalPrice)}{" "}
            </td>
            {/* <td>{val.statusPayment}</td> */}
            <td>
              <input
                type="button"
                onClick={(e) =>
                  this.toggleHandler(e, val.id, val.buktiTransfer, idx)
                }
                value="Check Bukti Transfer"
              />
            </td>
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
                    <h5>
                      {" "}
                      Package Name :
                      <span style={{ fontWeight: "normal" }}>
                        {val.products.packageName}
                      </span>
                    </h5>
                    <h5>
                      {" "}
                      Package Duration:{" "}
                      <span style={{ fontWeight: "normal" }}>
                        {val.products.packageDuration}
                      </span>
                    </h5>
                    <h5>
                      {" "}
                      Package Description :
                      <span style={{ fontWeight: "normal" }}>
                        {" "}
                        {val.products.packageDesc}
                      </span>
                    </h5>
                    <h5>
                      Package Category :
                      <span style={{ fontWeight: "normal" }}>
                        {" "}
                        {val.products.packageCategory}
                      </span>
                    </h5>
                    <h5>
                      {" "}
                      Date Booking :{" "}
                      <span style={{ fontWeight: "normal" }}>
                        {" "}
                        {val.products.dateBooking}
                      </span>
                    </h5>
                  </div>
                </td>
              </tr>
            );
          })}
          <Modal toggle={this.toggleModal} isOpen={this.state.modalOpen}>
            <ModalHeader toggle={this.toggleModal}>
              <caption>
                <h3>Bukti Transfer</h3>
              </caption>
            </ModalHeader>
            <ModalBody>
              <div>
                <img src={this.state.image} style={{width:"450px"}} alt="" />
                
              </div>
              <div>
                {this.state.transactionList.status == "Accept" ? (
                  <h4>Proses transaksi selesai</h4>
                ) : (
                  <>
                    <input
                      type="button"
                      onClick={this.acceptHandler}
                      className="upload-btn"
                      value="Accept"
                    />
                    <br></br>
                    <br></br>
                    <input type="button" onClick={this.rejectHandler} className="reject-btn" value="Reject" />
                  </>
                )}
              </div>
              <br />
              <input
                type="button"
                onClick={this.toggleModal}
                className="upload-btn"
                value="Cancel"
              />
            </ModalBody>
          </Modal>
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
              <span>Payment Confirmation</span>
            </h2>
          </div>
          <div className="cart_inner">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    {/* <th scope="col">No</th> */}

                    <th scope="col">No</th>
                    <th scope="col">User Name </th>
                    <th scope="col">Total Price</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>{this.renderTransaction()}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AdminPayment;
