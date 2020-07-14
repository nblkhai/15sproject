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

    render(){
        return(
            <div className="container pt-3"> 
            <center>

                <ProductCard data={this.state.productData}>

                </ProductCard>
                <input type="date"></input>
            </center>
            <div className="btn_3" >Add to Cart</div>
            </div>
        )
    }
}

export default ProductDetails