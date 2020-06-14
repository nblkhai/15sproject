import React from "react";
import "./Home.css";
import { Carousel, CarouselControl, CarouselItem } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShippingFast,
  faMoneyBillWave,
  faHeadset,
  faPeopleArrows,
} from "@fortawesome/free-solid-svg-icons";
import Colors from "../constants/Colors";
import { Link } from "react-router-dom";
import PosterSatu from "../assets/images/poster.jpg";
import PosterDua from "../assets/images/posterr.jpg";
import PosterTiga from "../assets/images/poster(1).jpg";
const dummy = [
  {
    image: PosterSatu,
    id: 1,
  },
  {
    image: PosterDua,
    id: 2,
  },
  {
    image: PosterTiga,
    id: 3,
  },
];

class Home extends React.Component {
  state = {
    activeIndex: 0,
    animating: false,
    bestSellerData: [],
    categoryFilter: "",
  };

  renderCarouselItems = () => {
    return dummy.map(({ image, id }) => {
      return (
        <CarouselItem
          onExiting={() => this.setState({ animating: true })}
          onExited={() => this.setState({ animating: false })}
          key={id.toString()}
        >
          <div className="carousel-item-home">
            <div className="container position-relative">
              <div className="row" style={{ paddingTop: "80px" }}>
                <div className="col-6 text-white position-relative"></div>
                <div className="col-12 d-flex flex-row justify-content-center">
                  <img
                    src={image}
                    alt=""
                    style={{ height: "750px", objectFit: "contain" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </CarouselItem>
      );
    });
  };

  nextHandler = () => {
    if (this.state.animating) return;
    let nextIndex =
      this.state.activeIndex === dummy.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  };

  prevHandler = () => {
    if (this.state.animating) return;
    let prevIndex =
      this.state.activeIndex === 0
        ? dummy.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: prevIndex });
  };
  render() {
    return (
      <div>
        <Carousel
          className="carousel-item-home-bg "
          next={this.nextHandler}
          previous={this.prevHandler}
          activeIndex={this.state.activeIndex}
        >
          {this.renderCarouselItems()}
          <CarouselControl
            directionText="Previous"
            direction="prev"
            onClickHandler={this.prevHandler}
          />
          <CarouselControl
            directionText="Next"
            direction="next"
            onClickHandler={this.nextHandler}
          />
        </Carousel>
          {/* ABOUT SECTION */}
          <div
          className="py-5"
          style={{ marginTop: "128px", backgroundColor: Colors.darkGray }}
        >
          <div className="container">
            <div className="row">
              <div className="col-4 text-center d-flex flex-column align-items-center">
                <FontAwesomeIcon
                  icon={faPeopleArrows}
                  style={{ fontSize: 70, color: Colors.accentLight }}
                />
                <h3 className="font-weight-bolder mt-4">Alfiansyah Ramdhani</h3>
                <p className="mt-4">
                 Script Writer and Director
                </p>
              </div>
              <div className="col-4 text-center d-flex flex-column align-items-center">
                <FontAwesomeIcon
                  icon={faMoneyBillWave}
                  style={{ fontSize: 70, color: Colors.accentLight }}
                />
                <h3 className="font-weight-bolder mt-4">Andi Rahmadi</h3>
                <p className="mt-4">
                  Podcaster
                </p>
              </div>
              <div className="col-4 text-center d-flex flex-column align-items-center">
                <FontAwesomeIcon
                  icon={faHeadset}
                  style={{ fontSize: 70, color: Colors.accentLight }}
                />
                <h3 className="font-weight-bolder mt-4">Fakhri Muhtadin</h3>
                <p className="mt-4">
                  Editor
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-4 text-center d-flex flex-column align-items-center">
                <FontAwesomeIcon
                  icon={faPeopleArrows}
                  style={{ fontSize: 70, color: Colors.accentLight }}
                />
                <h3 className="font-weight-bolder mt-4">Fauzan Ramdhani</h3>
                <p className="mt-4">
                  Director of Photography
                </p>
              </div>
              <div className="col-4 text-center d-flex flex-column align-items-center">
                <FontAwesomeIcon
                  icon={faMoneyBillWave}
                  style={{ fontSize: 70, color: Colors.accentLight }}
                />
                <h3 className="font-weight-bolder mt-4">Nabila Khairunnisa</h3>
                <p className="mt-4">
                  Finance and Co-Producer
                </p>
              </div>
              <div className="col-4 text-center d-flex flex-column align-items-center">
                <FontAwesomeIcon
                  icon={faHeadset}
                  style={{ fontSize: 70, color: Colors.accentLight }}
                />
                <h3 className="font-weight-bolder mt-4">Wahyu Fahrandika</h3>
                <p className="mt-4">
                  Producer
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-4 text-center d-flex flex-column align-items-center">
                <FontAwesomeIcon
                  icon={faPeopleArrows}
                  style={{ fontSize: 70, color: Colors.accentLight }}
                />
                <h3 className="font-weight-bolder mt-4">Yefta Ferdinand</h3>
                <p className="mt-4">
                  Script Writer and Director
                </p>
              </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
