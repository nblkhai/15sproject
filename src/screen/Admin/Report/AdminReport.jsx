import React from "react";
import Axios from "axios";
import { API_URL } from "../../../constants/API";
import { Bar } from "react-chartjs-2";

class AdminReport extends React.Component {
  state = {
    productList: [],
    barChart: {
      labels: [],
      datasets: [
        {
          data: [],
          label: "sold",
          backgroundColor: "rgb(196, 167, 201)",
          borderWidth: 3,
        },
      ],
    },
  };
  setBarData = () => {
    if (this.state.productList != "") {
        return this.state.productList.map((val) => {
          return this.setState({
            barChart: {
              ...this.state.barChart,
              labels: [...this.state.barChart.labels, val.packageName],
              
            },
          });
        });
      }
  };

  getProductList = () => {
    Axios.get(`${API_URL}/product/products`)
      .then((res) => {
        alert("masuk");
        this.setState({ productList: res.data });
        this.setBarData()
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.getProductList();
  }

  tes = () =>{
    if (this.state.productList != "") {
        return <h1>{this.state.productList[0].packageName}</h1>;
      }
  }

  
  render() {
    return (
      <div className="container">
        <div className="text-center tokolapak-heading">
          <h2>
            <span>Admin Report in Chart</span>
            {this.tes()}
          </h2>
        </div>

        <Bar
          options={{
            title: {
              display: true,
              fontSize: 22,
              text: "SOLD PRODUCT",
            },
          }}
          data={this.state.barChart}
        />
      </div>
    );
  }
}
export default AdminReport;
