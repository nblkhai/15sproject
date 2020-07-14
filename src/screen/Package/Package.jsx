import React from "react";
import "./Package.css";
import PhotoStudio from "../../assets/images/photo-studio.jpg";
import PosterSatu from "../../assets/images/poster.jpg";
import Axios from "axios";
import { API_URL } from "../../constants/API";
import { Link } from "react-router-dom";
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
    },
    valLocation: "",
    valDuration:""
  };

  inputHandler = (e) => {
    const { value } = e.target;
    this.setState({ categoryNow: value });
  };

  getProductList = () => {
    Axios.get(`${API_URL}/product/products`)
      .then((res) => {
        this.setState({ productList: res.data });
        this.renderProducts()
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getProductListbyLocation = () => {
    if (this.state.valLocation == "ALL") {
        this.getProductList();
    } else {
      Axios.get(`${API_URL}/product/filterLocation`, {
        params: {
          location: this.state.valLocation,
        },
      })
        .then((res) => {
          this.setState({ productList: res.data });
          console.log(res.data);
          this.renderProducts();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  getProductListbyCategory = (valCategory) => {
    Axios.get(`${API_URL}/product/filterCategory`, {
      params: {
        category: this.state.valCategory,
      },
    })
      .then((res) => {
        this.setState({ productList: res.data });
        this.renderProducts();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getProductListbyDuration = (valDuration) => {
    if (this.state.valDuration == "ALL") {
      this.getProductList();
  } else {
    Axios.get(`${API_URL}/product/filterDuration`, {
      params: {
        duration: this.state.valDuration,
      },
    })
      .then((res) => {
        this.setState({ productList: res.data });
        console.log(res.data);
        this.renderProducts();
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

  componentDidMount() {
    this.getProductList();
    console.log(this.state.productList);
  }
  renderProducts = () => {
    return this.state.productList.map((val) => {
      return <ProductCard data={val} className="m-2" />;
    });
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
                    <select
                      onChange={(e) => {
                        this.setState({ valLocation: e.target.value });
                      }}
                      onClick={() => this.getProductListbyLocation()}
                    >
                      <option value="ALL">ALL</option>
                      <option value="Indoor">Indoor</option>
                      <option value="Outdoor">Outdorr</option>
                    </select>
                    
                  </div>
                  <div className="single_sedebar">
                  <select
                      onChange={(e) => {
                        this.setState({ valDuration: e.target.value });
                      }}
                      onClick={() => this.getProductListbyDuration()}
                    >
                      <option value="ALL">ALL</option>
                      <option value="5Hours">5 Hours</option>
                      <option value="10Hours">10 Hours</option>
                      <option value="15Hours">15 Hours</option>
                    </select>
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
                  <div className="row">{this.renderProducts()}</div>
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
