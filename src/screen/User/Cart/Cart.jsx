import React from "react";
import Axios from "axios";
import swal from 'sweetalert'
import { connect } from "react-redux";


import { API_URL } from "../../../constants/API";
class Cart extends React.Component {
  state = {
    cartList: [],
    totalPrice: 0,
    statusPayment:false,
    datePay : new Date(),
    dateBooking : new Date()
  };
  getCartList = () => {
    let totalPriceItems = 0 ;
    Axios.get(`${API_URL}/cart/user/${this.props.user.id}`)
      .then((res) => {
        this.setState({ cartList: res.data });
        
        console.log(res.data);
        res.data.map((val) => {
          totalPriceItems += val.products.packageDuration * val.products.packagePrice;
          this.setState({dateBooking: val.dateBooking})
          console.log(totalPriceItems)
        })
        this.setState({
          totalPrice : totalPriceItems
        })
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.getCartList();
  }
  deleteBtnHandler = (cartId) => {
    Axios.delete(`${API_URL}/cart/${cartId}`)
      .then((res) => {
        console.log(res);
        this.getCartList();
        this.renderCartList();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  renderCartList = () => {
    return this.state.cartList.map((val, idx) => {
      const { id, products, dateBooking } = val;
      return (
        <>
          <tr>
            <td> {idx + 1} </td>
            <td> {products.packageName} </td>
            <td>
              {" "}
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(products.packagePrice)}{" "}
            </td>
            <td>{products.packageLocation}</td>
            <td>{products.packageDuration}</td>
            <td>{products.packageDesc}</td>
            <td>{products.packageCategory}</td>
            <td>{dateBooking}</td>
            <div
              onClick={() => this.deleteBtnHandler(id)}
              className="genric-btn danger circle"
            >
              Delete
            </div>
          </tr>
            
        </>
      );
    });
  };

  renderCartListPayment = () => {
    return this.state.cartList.map((val, idx) => {
      const { id, products, dateBooking,totalPriceItems } = val;
      return (
        <>
          <tr>
            <td> {idx+1} </td>
            <td> {products.packageName} </td>
            <td>
              {" "}
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(products.packagePrice)}{" "}
            </td>
            <td>{products.packageLocation}</td>
            <td>{products.packageDuration}</td>
            <td>{products.packageDesc}</td>
            <td>{products.packageCategory}</td>
            <td>{dateBooking}</td>
          </tr>
        </>
      );
    });
  };

  confirmBtn = () => {
    Axios.get(`${API_URL}/cart/user/${this.props.user.id}`)
      .then((res) => {
        console.log(res.data);
        console.log(this.state.dateBooking)
        res.data.map(val => {
          Axios.delete(`${API_URL}/cart/${val.id}`)
            .then((res) => {
              console.log(res);
              swal('Success!!', 'Transaksi anda berhasil', 'success')
              this.getCartList();
            })
            .catch((err) => {
              console.log(err)
            })
        })
        Axios.post(`${API_URL}/transactions/addTransaction/${this.props.user.id}`, {
          totalPrice: this.state.totalPrice,
          statusPayment: false,
          trasactionDate: this.state.datePay.toLocaleDateString(),
          dateBooking: this.state.dateBooking
        })
          .then((res) => {
            this.state.cartList.map(val => {
              Axios.post(`${API_URL}/transactionDetails/addTransactionDetails/${res.data.id}/${val.products.id}`, {
                price: val.products.price,
                totalPrice: val.products.packagePrice * val.products.packageDuration
              })
                .then((res) => {
                  console.log(res);
                })
                .catch((err) => {
                  console.log(err);
                })
            })
          })
          .catch((err) => {
            console.log(err);
          })
      })
      .catch((err) => {
        console.log(err);
      });
  }



  render() {
    return (
      <div class="cart_area section_padding">
        <div className="text-center tokolapak-heading">
          <h2>
            <span>CART</span>
          </h2>
        </div>
        <div class="container">
          <div class="cart_inner">
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">No</th>

                    <th scope="col">Package Name</th>
                    <th scope="col">Price / Hour</th>
                    <th scope="col">Location</th>
                    <th scope="col">Duration</th>
                    <th scope="col">Description</th>
                    <th scope="col">Category</th>
                    <th scope="col">Booking Date</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>{this.renderCartList()}</tbody>

                <div class="btn_3">Proceed To Checkout</div>
              </table>
            </div>
          </div>
        </div>

        <div class="container">
        <div className="text-center tokolapak-heading">
          <h2>
            <span>Transaction Details</span>
          </h2>
        </div>
          <div class="cart_inner">
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">No</th>

                    <th scope="col">Package Name</th>
                    <th scope="col">Price / Hour</th>
                    <th scope="col">Location</th>
                    <th scope="col">Duration</th>
                    <th scope="col">Description</th>
                    <th scope="col">Category</th>
                    <th scope="col">Booking Date</th>
                  </tr>
                </thead>
                <tbody>{this.renderCartListPayment()}</tbody>
          <h3>Total Price : {this.state.totalPrice}</h3>


                <div class="btn_3" onClick={() => this.confirmBtn()}>Check Out</div>
              </table>
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

export default connect(mapStateToProps)(Cart);

