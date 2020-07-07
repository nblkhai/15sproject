import React from "react";
import "./Portfolio.css"
class Portfolio extends React.Component {
  render() {
    return (
      <div>
      <div className="breadcrumb_part">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumb_iner">
                        <div className="text-center tokolapak-heading">
                            <h2><span>Portofolio</span></h2>
                            <h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel cum cumque ipsam hic
                                    harum. Facere, iste ab, natus non magnam cumque quibusdam esse quae numquam dolorum
                                    beatae vitae ea aut!</p>
                            </h5>
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
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <iframe width="560" height="315" margin-top="200px"
                                    src="https://www.youtube.com/embed/rErrfYdBAiI?start=2" frameborder="100"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>

                                    <div className="kiri-kanan"></div>

                                <iframe width="560" height="315" src="https://www.youtube.com/embed/9prGsOwui8o"
                                    frameborder="100"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>
                            </div>

                            <div className="atas-bawah"></div>

                            <div className="row">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/PSkNBrFJKTQ"
                                    frameborder="100"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>

                                    <div className="kiri-kanan"></div>

                                <iframe width="560" height="315" src="https://www.youtube.com/embed/u9ooVn-qqA8"
                                    frameborder="100"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>
                            </div>

                            <div className="atas-bawah"></div>

                            <div className="row">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/TIsED0RS4BI"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>

                                    <div className="kiri-kanan"></div>

                                <iframe width="560" height="315" src="https://www.youtube.com/embed/HBcmVFl0LWA"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      </div>
    );
  }
}

export default Portfolio;
