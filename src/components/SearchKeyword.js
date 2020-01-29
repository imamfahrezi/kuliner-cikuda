import React, { Fragment } from "react";

const SearchKeyword = props => (
  <Fragment>
    <h5>Search City</h5>
    <div className="card">
      <div className="card-body">
        <div className="form-row">
          <div className="col-10">
            <input
              type="text"
              className="form-control"
              placeholder="ype keyword i.e : restaurant's name, location, cuisine, etc."
              value={props.keyword}
              onChange={props.changeKeywordHandler}
            />
          </div>
          <div className="col-1">
            <button
              onClick={props.onClickAddToCriteria}
              className="btn btn-primary"
            >
              Add to Criteria
            </button>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

export default SearchKeyword;
