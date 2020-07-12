import React from "react"
import { API_URL } from "../../API";
import Axios from "axios";
import ProductCard from "../../components/ProductCard/ProductCard";

class ProductDetails extends React.Component {
    state = {
        productData: []
      };

      componentDidMount() {
        Axios.get(`${API_URL}/product/${this.props.match.params.productId}`)
          .then((res) => {
              console.log(res.data)
            this.setState({ productData: res.data });
          })
          .catch((err) => {
            console.log(err);
          });
      }

      // addToCartHandler = () => {
      //   // POST method ke /cart
      //   // Isinya: userId, productId, quantity
      //   // console.log(this.props.user.id);
    
      //   Axios.get(`${API_URL}/carts`, {
      //     params: {
      //       userId: this.props.user.id,
      //       productId: this.state.productData.id,
      //     },
      //   }).then((res) => {
      //     if (res.data.length) {
      //       Axios.put(`${API_URL}/carts/${res.data[0].id}`, {
      //         userId: this.props.user.id,
      //         productId: this.state.productData.id,
      //         quantity: res.data[0].quantity + 1,
      //       })
      //         .then((res) => {
      //           swal(
      //             "Add to cart",
      //             "Your item has been added to your cart",
      //             "success"
      //           );
      //           this.props.onFillCart(this.props.user.id);
      //         })
      //         .catch((err) => {
      //           console.log(err);
      //         });
      //     } else {
      //       Axios.post(`${API_URL}/cart/addtoCart`, {
      //         userId: this.props.user.id,
      //         productId: this.state.productData.id,
      //         quantity: 1,
      //       })
      //         .then((res) => {
      //           swal(
      //             "Add to cart",
      //             "Your item has been added to your cart",
      //             "success"
      //           );
      //           this.props.onFillCart(this.props.user.id);
      //         })
      //         .catch((err) => {
      //           console.log(err);
      //         });
      //     }
      //   });
      // };
    render(){
        return(
            <div className="container pt-3"> 
            <center>

                <ProductCard data={this.state.productData}>

                </ProductCard>
            </center>
            <div className="btn_3" >Add to Cart</div>
            </div>
        )
    }
}

export default ProductDetails