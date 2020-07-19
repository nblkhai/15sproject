import React from "react";
import "./Home.css";
import { Carousel, CarouselControl, CarouselItem } from "reactstrap";
import { Link } from "react-router-dom";
import "./Home.css"
import PosterSatu from "../../assets/images/poster.jpg";
import PosterDua from "../../assets/images/posterr.jpg";
import PosterTiga from "../../assets/images/poster(1).jpg";
import LogoBaru from "../../assets/images/LogoBaru.png"
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
        <div className="tokolapak_about_us">
            <div className="container">
                <div className="text-center tokolapak-heading">
                    <h2><span>About Us</span></h2>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="single_product_iner">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-lg-6 col-sm-6">
                                    <div className="single_product_img">
                                        <img src={LogoBaru} className="img-fluid"/>
                                           
                                    </div>
                                </div>
                                <div className="col-lg-5 col-sm-6">
                                    <div className="tokolapak_about_us_content">
                                        <h4> <a>15's Project is a film and advertising production house who
                                            belived can make big impact to others thorough creative process
                                            and inspiting output using the medium of videos and/or photos.
                                            Focusing on some aspects that usually missed from major
                                            viewpoint that can be called "The minor side of life"</a> </h4>
                                           <div className="text-center mt-3">
                                           <div className="btn_3"><Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to="/about"
                  >
                    Meet Our Crews!
                  </Link></div>
                                           </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     
        <div className="our_packages">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center tokolapak-heading">
                            <h2><span>Portofolio</span></h2>
                            <h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel cum cumque ipsam hic
                                    harum. Facere, iste ab, natus non magnam cumque quibusdam esse quae numquam dolorum
                                    beatae vitae ea aut!</p>
                            </h5>
                        </div>
                        <div className="row">
                           
                           <iframe
                              width="560"
                              height="315"
                              src="https://www.youtube.com/embed/rErrfYdBAiI?start=2"
                              frameborder="100"
                              margin-bottom="300px"
                              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                              allowfullscreen
                          
                            ></iframe>
                            <iframe
                              width="560"
                              height="315"
                              src="https://www.youtube.com/embed/9prGsOwui8o"
                              frameborder="100"
                              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                              allowfullscreen
                            ></iframe>
                         
                        </div>
                        <div className="text-center mt-3">
                        <div className="btn_3"><Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to="/portfolio"
                  >
                   Views More
                  </Link></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                </div>
        </div>

        <div className="our_packages">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center tokolapak-heading">
                            <h2><span>Our Package</span></h2>
                            <h5>
                                <p>Check Our Package!</p>
                            </h5>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-3">
                        <div className="btn_3"><Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to="/package"
                  >
                  See All Package
                  </Link></div>
                        </div>
            </div>
        </div>
        </div>
        </div>
    );
  }
}

export default Home;
