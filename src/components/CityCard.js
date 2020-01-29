import React from "react";
import { Link } from "react-router-dom";

const CityCard = props => (
  <div className="col-4">
    <div className="card text-center">
      <div className="card-body">
        <h5 className="card-title">{props.city.name}</h5>
        <p className="card-text">{props.city.country_name}</p>
        <Link to={`/city/${props.city.id}`}>
          See restaurants in {props.city.name}
        </Link>
      </div>
    </div>
  </div>
);

export default CityCard;
