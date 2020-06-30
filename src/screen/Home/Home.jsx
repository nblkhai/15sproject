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
import Colors from "../../constants/Colors";
import { Link } from "react-router-dom";
import PosterSatu from "../../assets/images/poster.jpg";
import PosterDua from "../../assets/images/posterr.jpg";
import PosterTiga from "../../assets/images/poster(1).jpg";
import ButtonUI from "../../components/Button/Button";
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
          className=" row d-flex flex-wrap justify-content-center py-5"
          style={{ backgroundColor: Colors.white }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <h2>About Us</h2>
              <p>
                15's Project is a film and advertising production house who
                belived can make big impact to others thorough creative process
                and inspiting output using the medium of videos and/or photos.
                Focusing on some aspects that usually missed from major
                viewpoint that can be called "The minor side of life"
              </p>
              <ButtonUI className="mb-5">
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/about"
                >
                  Meet Our Crews!
                </Link>
              </ButtonUI>
            </div>
          </div>

          {/* PORTFOLIO SECTION */}

          <div className="container">
            <div className="row justify-content-center mb-3">
            <h2>Portfolio</h2>
            <div className="row">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/rErrfYdBAiI?start=2"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/9prGsOwui8o"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <ButtonUI className="mt-3">
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/portfolio"
                >
                  See More
                </Link>
              </ButtonUI>
            </div>
          </div>

          {/* OUR PACKAGE SECTION */}
          
        </div>
      </div>
    );
  }
}

export default Home;
