import React from "react";
import "./Home.css";
import { Carousel, CarouselControl, CarouselItem } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShippingFast,
  faMoneyBillWave,
  faHeadset,
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
          style={{ marginTop: "128px", backgroundColor: Colors.white }}
        >
          <div className="container">
            <div className="row">
              <div className="col-4 text-center d-flex flex-column align-items-center">
                <FontAwesomeIcon
                  icon={faShippingFast}
                  style={{ fontSize: 70, color: Colors.accentLight }}
                />
                <h3 className="font-weight-bolder mt-4">FAST SHIPPING</h3>
                <p className="mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
                  impedit facilis nam vitae, accusamus doloribus alias
                  repellendus veniam voluptates ad doloremque sequi est, at
                  fugit pariatur quisquam ratione, earum sapiente.
                </p>
              </div>
              <div className="col-4 text-center d-flex flex-column align-items-center">
                <FontAwesomeIcon
                  icon={faMoneyBillWave}
                  style={{ fontSize: 70, color: Colors.accentLight }}
                />
                <h3 className="font-weight-bolder mt-4">100% REFUND</h3>
                <p className="mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
                  impedit facilis nam vitae, accusamus doloribus alias
                  repellendus veniam voluptates ad doloremque sequi est, at
                  fugit pariatur quisquam ratione, earum sapiente.
                </p>
              </div>
              <div className="col-4 text-center d-flex flex-column align-items-center">
                <FontAwesomeIcon
                  icon={faHeadset}
                  style={{ fontSize: 70, color: Colors.accentLight }}
                />
                <h3 className="font-weight-bolder mt-4">SUPPORT 24/7</h3>
                <p className="mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
                  impedit facilis nam vitae, accusamus doloribus alias
                  repellendus veniam voluptates ad doloremque sequi est, at
                  fugit pariatur quisquam ratione, earum sapiente.
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
