import React from "react";
import { Carousel, CarouselControl, CarouselItem } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShippingFast,
  faMoneyBillWave,
  faHeadset,
  faPeopleArrows,
} from "@fortawesome/free-solid-svg-icons";
import Colors from "../../constants/Colors";
import Logo from "../../assets/images/LogoBaru.png";

class aboutUs extends React.Component {
  render() {
    return (
      <div
        className="d-flex flex-wrap justify-content-center py-5"
        style={{ backgroundColor: Colors.white}}
      >
        <h1 className="mb-5">Meet Our Crews!</h1>
        <div className="container">
          <div className="row mb-5">
            <div className="col-4 text-center d-flex flex-column align-items-center">
              <img src={Logo} alt="" style={{ height: "300px" }} />
            </div>
            <div className="col-8">
              <h3 className="font-weight-bolder mt-4 text-center">Alfiansyah Ramdhani</h3>
              <p className="mt-4 text-center">Script Writer and Director</p>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-4 text-center d-flex flex-column align-items-center">
              <img src={Logo} alt="" style={{ height: "300px" }} />
            </div>
            <div className="col-8">
              <h3 className="font-weight-bolder mt-4 text-center">Fakhri Muhtadin</h3>
              <p className="mt-4 text-center">Editor</p>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-4 text-center d-flex flex-column align-items-center">
              <img src={Logo} alt="" style={{ height: "300px" }} />
            </div>
            <div className="col-8">
              <h3 className="font-weight-bolder mt-4 text-center">Fauzan Ramdhani</h3>
              <p className="mt-4 text-center">Director of Photography</p>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-4 text-center d-flex flex-column align-items-center">
              <img src={Logo} alt="" style={{ height: "300px" }} />
            </div>
            <div className="col-8">
              <h3 className="font-weight-bolder mt-4 text-center">Nabila Khairunnisa</h3>
              <p className="mt-4 text-center">Finance and Producer</p>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-4 text-center d-flex flex-column align-items-center">
              <img src={Logo} alt="" style={{ height: "300px" }} />
            </div>
            <div className="col-8">
              <h3 className="font-weight-bolder mt-4 text-center">Wahyu Fahrandika</h3>
              <p className="mt-4 text-center">Executive Produser and Marketing</p>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-4 text-center d-flex flex-column align-items-center">
              <img src={Logo} alt="" style={{ height: "300px" }} />
            </div>
            <div className="col-8">
              <h3 className="font-weight-bolder mt-4 text-center">Yefta Ferdinand</h3>
              <p className="mt-4 text-center">Script Writer and Director</p>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-4 text-center d-flex flex-column align-items-center">
              <img src={Logo} alt="" style={{ height: "300px" }} />
            </div>
            <div className="col-8">
              <h3 className="font-weight-bolder mt-4 text-center">Andi Rahmadi</h3>
              <p className="mt-4 text-center">Podcaster</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default aboutUs;
