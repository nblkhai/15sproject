import React from "react";
import PosterSatu from "../../assets/images/poster.jpg";
import Bella from "../../assets/images/Crew/Bella1.jpeg"
import Doyok from "../../assets/images/Crew/Doyok.jpeg"
import Fakhri from "../../assets/images/Crew/Fakhri.jpeg"
import Ojan from "../../assets/images/Crew/Fauzan.jpeg"
import Yeyep from "../../assets/images/Crew/Yeyep.jpeg"
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
                      
                          <img className="img-fluid" src={Doyok}/>
                     
                      <div className="team-content">
                          <h3 className="name">Alfiansyah</h3>
                          <h4 className="title">Script Writer and Director</h4>
                      </div>

                  </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                  <div className="our-team">
                      
                          <img className="img-fluid" src={Fakhri}/>
                    
                      <div className="team-content">
                          <h3 className="name">Fakhri Muhtadin</h3>
                          <h4 className="title">Editor</h4>
                      </div>
                  </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                  <div className="our-team">
                     
                          <img className="img-fluid" src={Ojan}/>
                     
                      <div className="team-content">
                          <h3 className="name">Fauzan Ramdhani</h3>
                          <h4 className="title">Director of Photography</h4>
                      </div>
                  </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                  <div className="our-team">
                    
                          <img className="img-fluid" src={Bella}/>
                     
                      <div className="team-content">
                          <h3 className="name">Nabila Khairunnisa</h3>
                          <h4 className="title">Finance and Producer</h4>
                      </div>
                  </div>
              </div>
             
      </div>
      <div className="row">
      <div className="col-8 col-sm-6 col-md-4 col-lg-3">
                  <div className="our-team">
                    
                          <img className="img-fluid" src={Yeyep}/>
                     
                      <div className="team-content">
                          <h3 className="name">Wahyu Fahrandika</h3>
                          <h4 className="title">Marketing and Executive Producer</h4>
                      </div>
                  </div>
              </div>
              <div className="col-8 col-sm-6 col-md-4 col-lg-3">
                  <div className="our-team">
                    
                          <img className="img-fluid" src={Yeyep}/>
                      
                      <div className="team-content">
                          <h3 className="name">Yefta Ferdinand</h3>
                          <h4 className="title">Script Writer and Director</h4>
                      </div>
                  </div>
              </div>
              <div className="col-8 col-sm-6 col-md-4 col-lg-3">
                  <div className="our-team">
                     
                          <img className="img-fluid" src={Yeyep}/>
                      
                      <div className="team-content">
                          <h3 className="name">Andi Rahmadi</h3>
                          <h4 className="title">Podcaster</h4>
                      </div>
                  </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                  <div className="our-team">
                    
                          <img className="img-fluid" src={Bella}/>
                     
                      <div className="team-content">
                          <h3 className="name">Catya Indra Pratiwi</h3>
                          <h4 className="title">Marketing and Podcaster</h4>
                      </div>
                  </div>
              </div>
      </div>

  </div>
    </div>
    
    );
  }
}

export default aboutUs;
