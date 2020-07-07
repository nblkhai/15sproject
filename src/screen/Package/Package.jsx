import React from "react"
import "./Package.css"
import PhotoStudio from "../../assets/images/photo-studio.jpg"
import PosterSatu from "../../assets/images/poster.jpg";
class Package extends React.Component{
    render(){
        return(
          <div>
                <div className="breadcrumb_part">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breadcrumb_iner">
                            <div className="text-center tokolapak-heading">
                                <h2><span>Our Package</span></h2>
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
   
    
        <div className="product_list section_padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="product_sidebar">
                            <div className="single_sedebar">
                                <div className="dropdown">
                                    <a className="btn btn-secondary dropdown-toggle" href="#" role="button"
                                        id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                        Tempat
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                            </div>
                            <div className="single_sedebar">
                                <div className="dropdown">
                                    <a className="btn btn-secondary dropdown-toggle" href="#" role="button"
                                        id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                        Durasi
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown">
                                <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Gatau lagi
                                </a>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="product_list">
                            <div className="row">
                                <div className="col-lg-6 col-sm-6">
                                    <div className="snip1396 green">
                                        <img src={PosterSatu} alt="pr-sample13" />
                                        <div className="image"><img src={PhotoStudio} alt="pr-sample13" /></div>
                                        <figcaption>
                                            <h3>PAKET A</h3>
                                            <p>Test</p>
                                        </figcaption>
                                        <div className="price">
                                            <s>$24.00</s>$19.00
                                        </div><a href="#" className="add-to-cart">
    
                                            Add to Cart<i className="ion-android-checkbox-outline"></i></a>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6">
                                    <figure className="snip1396 green">
                                        <img src="asset/img/poster.jpg" alt="pr-sample13" />
                                        <div className="image"><img src={PhotoStudio} alt="pr-sample13" /></div>
                                        <figcaption>
                                            <h3>PAKET A</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat tenetur
                                                excepturi deleniti cumque soluta perspiciatis beatae vitae iste doloremque
                                                corporis provident delectus ad praesentium, dolorem rerum facilis earum
                                                maxime eaque.</p>
                                        </figcaption>
                                        <div className="price">
                                            <s>$24.00</s>$19.00
                                        </div><a href="#" className="add-to-cart">
    
                                            Add to Cart<i className="ion-android-checkbox-outline"></i></a>
                                    </figure>
                                </div>
                                <div className="col-lg-6 col-sm-6">
                                    <figure className="snip1396 green">
                                        <img src="asset/img/poster.jpg" alt="pr-sample13" />
                                        <div className="image"><img src="asset/img/photo-studio.jpg" alt="pr-sample13" /></div>
                                        <figcaption>
                                            <h3>PAKET A</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat tenetur
                                                excepturi deleniti cumque soluta perspiciatis beatae vitae iste doloremque
                                                corporis provident delectus ad praesentium, dolorem rerum facilis earum
                                                maxime eaque.</p>
                                        </figcaption>
                                        <div className="price">
                                            <s>$24.00</s>$19.00
                                        </div><a href="#" className="add-to-cart">
    
                                            Add to Cart<i className="ion-android-checkbox-outline"></i></a>
                                    </figure>
                                </div>
                                <div className="col-lg-6 col-sm-6">
                                    <figure className="snip1396 green">
                                        <img src="asset/img/poster.jpg" alt="pr-sample13" />
                                        <div className="image"><img src="asset/img/photo-studio.jpg" alt="pr-sample13" /></div>
                                        <figcaption>
                                            <h3>PAKET A</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat tenetur
                                                excepturi deleniti cumque soluta perspiciatis beatae vitae iste doloremque
                                                corporis provident delectus ad praesentium, dolorem rerum facilis earum
                                                maxime eaque.</p>
                                        </figcaption>
                                        <div className="price">
                                            <s>$24.00</s>$19.00
                                        </div><a href="#" className="add-to-cart">
    
                                            Add to Cart<i className="ion-android-checkbox-outline"></i></a>
                                    </figure>
                                </div>
                                <div className="col-lg-6 col-sm-6">
                                    <figure className="snip1396 green">
                                        <img src="asset/img/poster.jpg" alt="pr-sample13" />
                                        <div className="image"><img src="asset/img/photo-studio.jpg" alt="pr-sample13" /></div>
                                        <figcaption>
                                            <h3>PAKET A</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat tenetur
                                                excepturi deleniti cumque soluta perspiciatis beatae vitae iste doloremque
                                                corporis provident delectus ad praesentium, dolorem rerum facilis earum
                                                maxime eaque.</p>
                                        </figcaption>
                                        <div className="price">
                                            <s>$24.00</s>$19.00
                                        </div><a href="#" className="add-to-cart">
    
                                            Add to Cart<i className="ion-android-checkbox-outline"></i></a>
                                    </figure>
                                </div>
                                <div className="col-lg-6 col-sm-6">
                                    <figure className="snip1396 green">
                                        <img src="asset/img/poster.jpg" alt="pr-sample13" />
                                        <div className="image"><img src="asset/img/photo-studio.jpg" alt="pr-sample13" /></div>
                                        <figcaption>
                                            <h3>PAKET A</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat tenetur
                                                excepturi deleniti cumque soluta perspiciatis beatae vitae iste doloremque
                                                corporis provident delectus ad praesentium, dolorem rerum facilis earum
                                                maxime eaque.</p>
                                        </figcaption>
                                        <div className="price">
                                            <s>$24.00</s>$19.00
                                        </div><a href="#" className="add-to-cart">
    
                                            Add to Cart<i className="ion-android-checkbox-outline"></i></a>
                                    </figure>
                                </div>
    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          </div>
        )
    }
}

export default Package