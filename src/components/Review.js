import React from "react";
import RatingLabel from "./RatingLabel";

const Review = props => (
  <div className="card border-success mb-0.5">
    <div className="card-body mb-2">
      <div className="row mb-2">
        <div className="col-1" style={{ border: "0px solid black" }}>
          <img
            src={props.review.user.profile_image}
            alt=""
            className="img-responsive"
            style={{ borderRadius: "50%", width: 80 }}
          />
        </div>
        <div className="col-11" style={{ border: "0px solid black" }}>
          <h6 className="font-weight-bold">{props.review.user.name}</h6>
          <RatingLabel
            labelColor={`${props.review.user.foodie_color}`}
            text={`${props.review.user.foodie_level_num} (${props.review.user.foodie_level})`}
          />
        </div>
      </div>
      <h6 className="card-text text-muted">
        {props.review.review_time_friend}
      </h6>
      <RatingLabel
        labelColor={`${props.review.rating_color}`}
        text={`${props.review.rating} (${props.review.rating_text})`}
      />
      <p className="card-text">{props.review.review_text}</p>
    </div>
  </div>
);

export default Review;
