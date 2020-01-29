import React, { Fragment } from "react";
import mainImage from "../assets/images/aneka-makanan.png";

const ImageAndWelcome = props => (
  <Fragment>
    <div className="row mb-3">
      <img src={mainImage} width="100%" height="500px" />
    </div>
    <div className="row">
      <div className="col">
        <div className="text-white bg-success mb-3 text-center">
          <div className="card-header">
            <h1>Welcome to FoodParadise</h1>
          </div>
          <div className="card-body">
            <h4 className="card-title">
              The Easiest Way to Find Restaurants and Food
            </h4>
            <p>
              You can grab information about restaurants, cafees, cuisines with
              just a few clicks.
            </p>
            Start by choosing the featured cities below, or search the city
            name.
            <p></p>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

export default ImageAndWelcome;
