import React from "react";
import "./Package.css";
import PhotoStudio from "../../assets/images/photo-studio.jpg";
import PosterSatu from "../../assets/images/poster.jpg";
import Axios from "axios";
import { API_URL } from "../../constants/API";
import ProductCard from "../../components/ProductCard/ProductCard";
class Package extends React.Component {
  state = {
    productList: [],
    productData: {
      id: 0,
      packageName: "",
      packagePrice: 0,
      packageLocation: "",
      packageDuration: "",
      packageDesc: "",
      packageCategory: "",
      packagePhotos: "",
    },
  };
  getProductList = () => {
    Axios.get(`${API_URL}/product/products`)
      .then((res) => {
        this.setState({ productList: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.getProductList();
    console.log(this.state.productList)
  }
  renderProducts = () => {
    return this.state.productList.map((val) => {
    
        return(

          <ProductCard
            data={val}
            className="m-2"
          />
   
        )
        
      }
    );
  };
  render() {
    return (
      <div>
        <div className="breadcrumb_part">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb_iner">
                  <div className="text-center tokolapak-heading">
                    <h2>
                      <span>Our Package</span>
                    </h2>
                    <h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vel cum cumque ipsam hic harum. Facere, iste ab, natus
                        non magnam cumque quibusdam esse quae numquam dolorum
                        beatae vitae ea aut!
                      </p>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="product_list section_padding">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="product_sidebar">
                  <div className="single_sedebar">
                    <div className="dropdown">
                      <a
                        className="btn btn-secondary dropdown-toggle"
                        href="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Tempat
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="single_sedebar">
                    <div className="dropdown">
                      <a
                        className="btn btn-secondary dropdown-toggle"
                        href="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Durasi
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown">
                    <a
                      className="btn btn-secondary dropdown-toggle"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Gatau lagi
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="product_list">
                  <div className="row">
                    {this.renderProducts()}
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Package;
