import React from "react";

import ButtonUI from "../Button/Button";
import PhotoStudio from "../../assets/images/photo-studio.jpg";
import PosterSatu from "../../assets/images/poster.jpg";

interface ProductCardData {
  id?: number;
  packageName?: string;
  packagePrice?: number;
  packageLocation?: string;
  packageDuration?: string;
  packageDesc?: string;
  packageCategory?:string;
  packagePhotos?:string
}

type ProductCardProps = {
  data: ProductCardData;
//   className?: string;
};

class ProductCard extends React.Component<ProductCardProps> {
  render() {
    
      return(
        <div className="col-lg-6 col-sm-6">
        <div className="snip1396 green">
          <img src={PosterSatu} alt="pr-sample13" />
          <div className="image">
            <img src={PhotoStudio} alt="pr-sample13" />
          </div>
          <figcaption>
            <h3>{this.props.data.packageName}</h3>
            <p>{this.props.data.packageLocation} - {this.props.data.packageDuration} </p>
            <p>{this.props.data.packageDesc}</p>
          </figcaption>
          <div className="price">
            {this.props.data.packagePrice}
          </div>
          <div className="add-to-cart">
            Add to Cart
            <i className="ion-android-checkbox-outline"></i>
          </div>
        </div>
      </div>
      )
  }
}
  export default ProductCard;
