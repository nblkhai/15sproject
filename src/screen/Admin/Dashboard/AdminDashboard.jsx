import React from "react";
import "../Dashboard/AdminDashboard.css";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import ButtonUI from "../../../components/Button/Button";
import TextField from "../../../components/TextField/TextField";
import swal from "sweetalert";
import Axios from "axios";

import { API_URL } from "../../../constants/API";

class AdminDashboard extends React.Component {
  state = {
    productList: [],
    createForm: {
      packageName: "",
      packagePrice: 0,
      packageLocation: "",
      packageDuration: "",
      packageDesc: "",
      packageCategory: "Advertisement",
      packagePhotos: "",
    },
    editForm: {
      id: 0,
      packageName: "",
      packagePrice: 0,
      packageLocation: "",
      packageDuration: "",
      packageDesc: "",
      packageCategory: "",
      packagePhotos: "",
    },
    activeProducts: [],
    modalOpen: false,
  };
  createProductHandler = () => {
    console.log(this.state.createForm)
    Axios.post(`${API_URL}/product/addProduct`, this.state.createForm)
      .then((res) => {
        swal("Success!", "Your item has been added to the list", "success");
        this.setState({
          createForm: {
            productName: "",
            packagePrice: 0,
            packageLocation: "",
            packageDuration: "",
            packageDesc: "",
            packageCategory: "",
            packagePhotos: "",
          },
        });
        this.getProductList();
      })
      .catch((err) => {
        swal("Error!", "Your item could not be added to the list", "error");
      });
  };
  inputHandler = (e, field, form) => {
    let { value } = e.target;
    this.setState({
      [form]: {
        ...this.state[form],
        [field]: value,
      },
    });
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
  renderProductList = () => {
    return this.state.productList.map((val, idx) => {
      const {
        id,
        packageName,
        packagePrice,
        packageLocation,
        packageDuration,
        packageDesc,
        packageCategory,
        packagePhotos,
      } = val;
      return (
        <>
          <tr
            onClick={() => {
              if (this.state.activeProducts.includes(idx)) {
                this.setState({
                  activeProducts: [
                    ...this.state.activeProducts.filter((item) => item !== idx),
                  ],
                });
              } else {
                this.setState({
                  activeProducts: [...this.state.activeProducts, idx],
                });
              }
            }}
          >
            <td> {id} </td>
          <td>
            <img style={{width:"200px"}} src={packagePhotos} alt=""/>
          </td>
            <td> {packageName} </td>
            <td>
              {" "}
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(packagePrice)}{" "}
            </td>
            <td>{packageLocation}</td>
            <td>{packageDuration}</td>
            <td>{packageDesc}</td>
            <td>{packageCategory}</td>
            <td>
              <div
                className="list_package_edit.html"
                className="genric-btn info circle"
              >
                Edit
              </div>
              <div className="genric-btn danger circle">Delete</div>
            </td>
          </tr>
        </>
      );
    });
  };
  render() {
    return (
      <div className="cart_area">
        <div className="text-center tokolapak-heading">
          <h2>
            <span>List Package</span>
          </h2>
        </div>
        <div className="container">
          <div className="cart_inner">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                  <th scope="col">No</th>
                    <th scope="col">Photo</th>
                    <th scope="col">Package Name</th>
                    <th scope="col">Price / Hour</th>
                    <th scope="col">Location</th>
                    <th scope="col">Duration</th>
                    <th scope="col">Description</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>{this.renderProductList()}</tbody>
                <div className="genric-btn primary circle">Add Package</div>
              </table>
            </div>
          </div>
        </div>
        <div className="dashboard-form-container p-4">
          <caption className="mb-4 mt-2">
            <h2>Add Product</h2>
          </caption>
          <div className="row">
            <div className="col-8">
              <TextField
                value={this.state.createForm.packageName}
                placeholder="Product Name"
                onChange={(e) =>
                  this.inputHandler(e, "packageName", "createForm")
                }
              />
            </div>
            <div className="col-4">
              <TextField
                value={this.state.createForm.packagePrice}
                placeholder="Price"
                onChange={(e) => this.inputHandler(e, "packagePrice", "createForm")}
              />
            </div>
            <div className="col-12 mt-3">
              <textarea
                value={this.state.createForm.packageDesc}
                onChange={(e) => this.inputHandler(e, "packageDesc", "createForm")}
                style={{ resize: "none" }}
                placeholder="Description"
                className="custom-text-input"
              ></textarea>
            </div>
            <div className="col-6 mt-3">
              <select
                value={this.state.createForm.packageCategory}
                className="custom-text-input h-100 pl-3"
                onChange={(e) => this.inputHandler(e, "packageCategory", "createForm")}
              >
                <option value="Advertisement">Advertisement</option>
                <option value="Short Movie">Short Movie</option>
                <option value="Documenter">Documenter</option>
              </select>
            </div>
            <div className="col-6 mt-3">
              <select
                value={this.state.createForm.packageDuration}
                className="custom-text-input h-100 pl-3"
                onChange={(e) => this.inputHandler(e, "packageDuration", "createForm")}
              >
                <option value="5 Hours">5 Hours</option>
                <option value="10 Hours">10 Hours</option>
                <option value="15 Hours">15 Hours</option>
              </select>
            </div>
            <div className="col-6 mt-3">
              <TextField
                value={this.state.createForm.packagePhotos}
                placeholder="Image Source"
                onChange={(e) => this.inputHandler(e, "packagePhotos", "createForm")}
              />
            </div>
            <div className="col-6 mt-3">
              <select
                value={this.state.createForm.packageLocation}
                className="custom-text-input h-100 pl-3"
                onChange={(e) => this.inputHandler(e, "packageLocation", "createForm")}
              >
                <option value="Indoor">Indoor</option>
                <option value="Outdoor">Outdoor</option>
              </select>
            </div>
            <div className="col-3 mt-3">
              <ButtonUI onClick={this.createProductHandler} type="contained">
                Add Product
              </ButtonUI>
            </div>
          </div>
        </div>
        <Modal
          toggle={this.toggleModal}
          isOpen={this.state.modalOpen}
          className="edit-modal"
        >
          <ModalHeader toggle={this.toggleModal}>
            <caption>
              <h3>Edit Product</h3>
            </caption>
          </ModalHeader>
          <ModalBody>
            <div className="row">
              <div className="col-8">
              <TextField
                value={this.state.createForm.packageName}
                placeholder="Product Name"
                onChange={(e) =>
                  this.inputHandler(e, "packageName", "createForm")
                }
              />
            </div>
            <div className="col-4">
              <TextField
                value={this.state.createForm.packagePrice}
                placeholder="Price"
                onChange={(e) => this.inputHandler(e, "packagePrice", "createForm")}
              />
            </div>
            <div className="col-12 mt-3">
              <textarea
                value={this.state.createForm.packageDesc}
                onChange={(e) => this.inputHandler(e, "packageDesc", "createForm")}
                style={{ resize: "none" }}
                placeholder="Description"
                className="custom-text-input"
              ></textarea>
            </div>
            <div className="col-6 mt-3">
              <select
                value={this.state.createForm.packageCategory}
                className="custom-text-input h-100 pl-3"
                onChange={(e) => this.inputHandler(e, "packageCategory", "createForm")}
              >
                <option value="Advertisement">Advertisement</option>
                <option value="Short Movie">Short Movie</option>
                <option value="Documenter">Documenter</option>
              </select>
            </div>
            <div className="col-6 mt-3">
              <select
                value={this.state.createForm.packageDuration}
                className="custom-text-input h-100 pl-3"
                onChange={(e) => this.inputHandler(e, "packageDuration", "createForm")}
              >
                <option value="5 Hours">5 Hours</option>
                <option value="10 Hours">10 Hours</option>
                <option value="15 Hours">15 Hours</option>
              </select>
            </div>
            <div className="col-6">
              <TextField
                value={this.state.createForm.packagePhotos}
                placeholder="Image Source"
                onChange={(e) => this.inputHandler(e, "packagePhotos", "createForm")}
              />
            </div>
            <div className="col-6 mt-3">
              <select
                value={this.state.createForm.packageLocation}
                className="custom-text-input h-100 pl-3"
                onChange={(e) => this.inputHandler(e, "packageLocation", "createForm")}
              >
                <option value="Indoor">Indoor</option>
                <option value="Outdoor">Outdoor</option>
              </select>
            </div>
              <div className="col-5 mt-3 offset-1">
                <ButtonUI
                  className="w-100"
                  onClick={this.toggleModal}
                  type="outlined"
                >
                  Cancel
                </ButtonUI>
              </div>
              <div className="col-5 mt-3">
                <ButtonUI
                  className="w-100"
                  onClick={this.editProductHandler}
                  type="contained"
                >
                  Save
                </ButtonUI>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </div>
      
      
    );
  }
}

export default AdminDashboard;
