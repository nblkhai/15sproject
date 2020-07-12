import React from "react";
import swal from "sweetalert";
import ButtonUI from "../../../components/Button/Button";
import TextField from "../../../components/TextField/TextField";
import Axios from "axios";
import { API_URL } from "../../../constants/API";
class AdminCategory extends React.Component{
    state = {
        categoryList:[],
        categoryForm: {
            categoryName:""
        }
    }
    inputHandler = (e, field, form) => {
        let { value } = e.target;
        this.setState({
          [form]: {
            ...this.state[form],
            [field]: value,
          },
        });
      };
    createCategoryHandler = () => {
        console.log(this.state.categoryForm)
        Axios.post(`${API_URL}/category/addCategory`, this.state.categoryForm)
          .then((res) => {
            swal("Success!", "Your item has been added to the list", "success");
            this.setState({
              categoryForm: {
                categoryName: "",
              },
            });
            this.getCategoryList();
          })
          .catch((err) => {
            swal("Error!", "Your item could not be added to the list", "error");
          });
      };
      getCategoryList = () => {
        Axios.get(`${API_URL}/category`)
          .then((res) => {
            this.setState({ categoryList: res.data });
            console.log(res.data)
            console.log(this.state.categoryList)
          })
          .catch((err) => {
            console.log(err);
          });
      };
      componentDidMount() {
        this.getCategoryList();
        console.log(this.state.categoryList)
      }

      renderCategoryList = () => {
          return this.state.categoryList.map((val,idx) => {
              const{
                  id,categoryName
              } = val
              return(
                  <>
                  <tr>
                  <td>{id}</td>
              <td>{categoryName}</td>
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
              )
          })
      }
render () {
    return (
        <div className="cart_area">
 <div className="text-center tokolapak-heading">
 <h2>
            <span>Category</span>
          </h2> 
 </div>
 <div className="container">
     <div className="cart_inner">
         <div className="table-responsive">
             <table className="table">
<thead>
    <tr>
        <th scope="col"> No</th>
        <th scope="col"> Category Name</th>
        <th scope="col"> Action</th>

    </tr>
</thead>
    <tbody>{this.renderCategoryList()}</tbody>
             </table>

         </div>

     </div>

 </div>
 <div className="dashboard-form-container p-4">
     <div className="mb-4 mt-2">
         <h2>
             Add Category
         </h2>
         <div className="row">
             <div className="col-10">

 <TextField
                value={this.state.categoryForm.categoryName}
                placeholder="Category Name"
                onChange={(e) =>
                  this.inputHandler(e, "categoryName", "categoryForm")
                }
              />
             </div>
             <div className="col-3 mt-3">
              <ButtonUI onClick={this.createCategoryHandler} type="contained">
                Add Product
              </ButtonUI>
              </div>

         </div>

     </div>

 </div>
        </div>
    )
}

}
export default AdminCategory