import React from "react";

const SearchCity = props => (
  <div className="row mb-3">
    <div className="col">
      <h3>Search City</h3>
      <div className="card">
        <div className="card-body">
          <div className="form-row">
            <div className="col-10">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                value={props.keyword}
                onChange={props.onChange}
              />
            </div>
            <div className="col-1">
              <button
                className="btn btn-primary"
                type="button"
                onClick={props.onClickSearch}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SearchCity;
