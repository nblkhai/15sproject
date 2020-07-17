import React from "react";
import Axios from "axios";
import { API_URL } from "../../../constants/API";
import { connect } from "react-redux";

class History extends React.Component{
    state={
        historyList:[],
        status:false,
        modalOpen: false,
    }

    gethistoryList = (val) => {
        // let totalPriceItems = 0 ;
        Axios.get(`${API_URL}/transactions/user/${this.props.user.id}?statusPayment=${val}`)
          .then((res) => {
              
            this.setState({ historyList: res.data , status:val});
            console.log(res.data);
            // res.data.map((val) => {
            //   totalPriceItems += val.products.packageDuration * val.products.packagePrice;
            // })
            // this.setState({
            //   totalPrice : totalPriceItems
            // })
          })
          .catch((err) => {
            alert("Pending")
            console.log(err);
          });
      };
      componentDidMount() {
        this.gethistoryList(this.state.status);
      }

      renderHistoryList = () => {
        return this.state.historyList.map((val, idx) => {
          const { id, totalPrice, statusPayment , transansactionDetails} = val;
          return (
            <>
                {transansactionDetails.map((val,index) => {
                    return (
                      <tr>
                        {/* <td>{val.products.idx}</td> */}
                    <td>{index + 1}</td>
                        <td>{val.products.packageName}</td>
                        <td>{val.products.packagePrice}</td>
                        <td>{val.products.packageLocation}</td>
                        <td>{val.products.packageDuration} Hours</td>
                        <td>{val.products.packageDesc}</td>  
                        <td>{val.products.packageCategory}</td>
                        <td>{val.products.dateBooking}</td>   
                        <td>{val.products.totalPrice}</td>   
                        <div
              className="genric-btn primary circle mb-3 mt-2"
            >
         Upload Bukti Transfer
            </div>             
             </tr>
                    )
                })}
                {/* <td>
                  {" "}
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(products.packagePrice)}{" "}
                </td> */}
                {/* <td>{products.packageLocation}</td>
                <td>{products.packageDuration}</td>
                <td>{products.packageDesc}</td>
                <td>{products.packageCategory}</td>
                <td>{dateBooking}</td>
                <td>{totalPrice}</td> */}
                {/* <div className="btn_3 ml-4 " onClick={() => this.gethistoryList("pending")}>Upload Bukti Transfer</div> */}
              
            </>
          );
        });
      };
    
    render() {
        return (
          <div classNamw="cart_area section_padding">
            <div className="text-center tokolapak-heading">
              <h2>
                <span>User History</span>
              </h2>
            </div>
            <div classNamw="container">
            <div className="d-flex justify-content-center mb-3">
            <div className="btn_3 ml-4">Pending</div>
            <div className="btn_3 ml-4">Success</div>
            <div className="btn_3 ml-4">Reject</div>
            </div>
              <div className="cart_inner">
                <div className="table-responsive">
                  <table className="table">
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
                         <th scope="col">Total Price </th>

                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>{this.renderHistoryList()}</tbody>
                  </table>
                </div>
              </div>
            </div>
            </div>
        )
    }           
}

const mapStateToProps = (state) => {
    return {
      user: state.user,
    };
  };
  
  export default connect(mapStateToProps)(History);
  