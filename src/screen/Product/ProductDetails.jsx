import React from "react";
import { API_URL } from "../../API";
import Axios from "axios";
import ProductCard from "../../components/ProductCard/ProductCard";
import { connect } from "react-redux";

class ProductDetails extends React.Component {
  state = {
    productData: [],
    cartData: {
      dateBooking: "",
    },
    cartList: [],
  };

  dateHandler = (e) => {
    const { value } = e.target;
    this.setState({
      cartData: {
        ...this.state.cartData,
        dateBooking: value,
      },
    });
  };

  componentDidMount() {
    Axios.get(`${API_URL}/product/${this.props.match.params.productId}`)
      .then((res) => {
        console.log(res.data);
        this.setState({ productData: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
    this.getCartList();

  }


  
  getCartList = () => {
    Axios.get(`${API_URL}/cart`)
      .then((res) => {
        console.log(res.data);
        this.setState({ cartList: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  addToCartBtnHandler = () => {
    if (this.state.cartList.length == 0) {
      Axios.post(
        `${API_URL}/cart/addtoCart/${this.props.match.params.productId}/${this.props.user.id}`,
        this.state.cartData
      )
        .then((res) => {
          console.log(res.data);
          this.getCartList();
        })
        .catch((err) => {
          console.log(err);
          console.log(this.state.cartData);
        });
    } else {
      this.state.cartList.map((val, idx) => {
        if (this.state.cartData.dateBooking == val.dateBooking){

          alert("Booked")
        }else if( idx+1 == this.state.cartList.length){
          Axios.post(
            `${API_URL}/cart/addtoCart/${this.props.match.params.productId}/${this.props.user.id}`,
            this.state.cartData
          )
            .then((res) => {
              console.log(res.data);
              this.getCartList();
            })
            .catch((err) => {
              console.log(err);
              console.log(this.state.cartData);
            });
         
        }

      });
    }
  };

  render() {
    return (
      <div className="container pt-3">
        <center>
          <ProductCard data={this.state.productData}></ProductCard>
          <input type="date" onChange={(e) => this.dateHandler(e)}></input>
        </center>
        <div>
          <input
            type="button"
            className="btn_3"
            value="Add to Cart"
            onClick={() => this.addToCartBtnHandler()}
          />
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

export default connect(mapStateToProps)(ProductDetails);
