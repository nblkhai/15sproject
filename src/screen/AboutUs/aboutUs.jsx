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
import PosterSatu from "../../assets/images/poster.jpg";
import "./aboutUs.css"


class aboutUs extends React.Component {
  render() {
    return (

    <div>
        <div className="breadcrumb_part">
      <div className="container">
          <div className="row">
              <div className="col-lg-12">
                  <div className="breadcrumb_iner">
                      <div className="text-center tokolapak-heading">
                          <h2><span>About Us</span></h2>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>


  <div className="about_us padding_top">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-8">
                  <div className="about_us_video">
                      <img src={PosterSatu} alt="#" className="img-fluid"/>
                  </div>
                  <div className="about_us_content">
                      <h3>15's Project is a film and advertising production house who
                          belived can make big impact to others thorough creative process
                          and inspiting output using the medium of videos and/or photos.
                          Focusing on some aspects that usually missed from major
                          viewpoint that can be called "The minor side of life"</h3>
                  </div>
              </div>
              <div className="about_us_content">
                  <h5>Our Mission</h5>
                  <h3>Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor sollicitudin. Pellentesque
                      id dolor tempor sapien feugiat ultrices nec sed neque.</h3>
                  <h5>Our Mission</h5>
                  <h3>Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor sollicitudin. Pellentesque
                      id dolor tempor sapien feugiat ultrices nec sed neque.</h3>
              </div>
          </div>
      </div>
      </div>
  

  <div className="container">
      <div className="row">
          <div className="row">
              <div className="col-lg-12">
                  <div className="text-center tokolapak-heading">
                      <h2><span>Meet Our Team</span></h2>
                      <h5>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel cum cumque ipsam hic
                              harum. Facere, iste ab, natus non magnam cumque quibusdam esse quae numquam dolorum
                              beatae vitae ea aut!</p>
                      </h5>
                  </div>
              </div>
          </div>

              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                  <div className="our-team">
                      <div className="picture">
                          <img className="img-fluid" src="https://picsum.photos/130/130?image=1027"/>
                      </div>
                      <div className="team-content">
                          <h3 className="name">Isi Nama</h3>
                          <h4 className="title">Sutradara</h4>
                      </div>
                      <ul className="social">
                          <li><a href="#" className="fa fa-facebook"
                                  aria-hidden="true"></a></li>
                          <li><a href="#" className="fa fa-twitter"
                                  aria-hidden="true"></a></li>
                          <li><a href="#" className="fa fa-google-plus"
                                  aria-hidden="true"></a></li>
                          <li><a href="#" className="fa fa-linkedin"
                                  aria-hidden="true"></a></li>
                      </ul>
                  </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                  <div className="our-team">
                      <div className="picture">
                          <img className="img-fluid" src="https://picsum.photos/130/130?image=839"/>
                      </div>
                      <div className="team-content">
                          <h3 className="name">Isi Nama</h3>
                          <h4 className="title">Sutradara</h4>
                      </div>
                      <ul className="social">
                          <li><a href="#" className="fa fa-facebook"
                                  aria-hidden="true"></a></li>
                          <li><a href="#" className="fa fa-twitter"
                                  aria-hidden="true"></a></li>
                          <li><a href="#" className="fa fa-google-plus"
                                  aria-hidden="true"></a></li>
                          <li><a href="#" className="fa fa-linkedin"
                                  aria-hidden="true"></a></li>
                      </ul>
                  </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                  <div className="our-team">
                      <div className="picture">
                          <img className="img-fluid" src="https://picsum.photos/130/130?image=856"/>
                      </div>
                      <div className="team-content">
                          <h3 className="name">Isi Nama</h3>
                          <h4 className="title">Sutradara</h4>
                      </div>
                      <ul className="social">
                          <li><a href="#" className="fa fa-facebook"
                                  aria-hidden="true"></a></li>
                          <li><a href="#" className="fa fa-twitter"
                                  aria-hidden="true"></a></li>
                          <li><a href="#" className="fa fa-google-plus"
                                  aria-hidden="true"></a></li>
                          <li><a href="#" className="fa fa-linkedin"
                                  aria-hidden="true"></a></li>
                      </ul>
                  </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                  <div className="our-team">
                      <div className="picture">
                          <img className="img-fluid" src="https://picsum.photos/130/130?image=836"/>
                      </div>
                      <div className="team-content">
                          <h3 className="name">Isi Nama</h3>
                          <h4 className="title">Sutradara</h4>
                      </div>
                      <ul className="social">
                          <li><a href="#" className="fa fa-facebook"
                                  aria-hidden="true"></a></li>
                          <li><a href="#" className="fa fa-twitter"
                                  aria-hidden="true"></a></li>
                          <li><a href="#" className="fa fa-google-plus"
                                  aria-hidden="true"></a></li>
                          <li><a href="#" className="fa fa-linkedin"
                                  aria-hidden="true"></a></li>
                      </ul>
                  </div>
              </div>
             
      </div>
      <div className="row">
      <div className="col-8 col-sm-6 col-md-4 col-lg-3">
                  <div className="our-team">
                      <div className="picture">
                          <img className="img-fluid" src="https://picsum.photos/130/130?image=836"/>
                      </div>
                      <div className="team-content">
                          <h3 className="name">Isi Nama</h3>
                          <h4 className="title">Sutradara</h4>
                      </div>
                      <ul className="social">
                          <li><a href="#" className="fa fa-facebook"
                                  aria-hidden="true"></a></li>
                          <li><a href="#" className="fa fa-twitter"
                                  aria-hidden="true"></a></li>
                          <li><a href="#" className="fa fa-google-plus"
                                  aria-hidden="true"></a></li>
                          <li><a href="#" className="fa fa-linkedin"
                                  aria-hidden="true"></a></li>
                      </ul>
                  </div>
              </div>
              <div className="col-8 col-sm-6 col-md-4 col-lg-3">
                  <div className="our-team">
                      <div className="picture">
                          <img className="img-fluid" src="https://picsum.photos/130/130?image=836"/>
                      </div>
                      <div className="team-content">
                          <h3 className="name">Isi Nama</h3>
                          <h4 className="title">Sutradara</h4>
                      </div>
                      <ul className="social">
                          <li><a href="#" className="fa fa-facebook"
                                  aria-hidden="true"></a></li>
                          <li><a href="#" className="fa fa-twitter"
                                  aria-hidden="true"></a></li>
                          <li><a href="#" className="fa fa-google-plus"
                                  aria-hidden="true"></a></li>
                          <li><a href="#" className="fa fa-linkedin"
                                  aria-hidden="true"></a></li>
                      </ul>
                  </div>
              </div>
              <div className="col-8 col-sm-6 col-md-4 col-lg-3">
                  <div className="our-team">
                      <div className="picture">
                          <img className="img-fluid" src="https://picsum.photos/130/130?image=836"/>
                      </div>
                      <div className="team-content">
                          <h3 className="name">Isi Nama</h3>
                          <h4 className="title">Sutradara</h4>
                      </div>
                      <ul className="social">
                          <li><a href="#" className="fa fa-facebook"
                                  aria-hidden="true"></a></li>
                          <li><a href="#" className="fa fa-twitter"
                                  aria-hidden="true"></a></li>
                          <li><a href="#" className="fa fa-google-plus"
                                  aria-hidden="true"></a></li>
                          <li><a href="#" className="fa fa-linkedin"
                                  aria-hidden="true"></a></li>
                      </ul>
                  </div>
              </div>

      </div>

  </div>
    </div>
    
    );
  }
}

export default aboutUs;
