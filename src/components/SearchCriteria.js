import React from "react";

const SearchCriteria = props => (
  <div className="card bg-light mb-3 mt-2">
    <div className="card-body">
      <div className="card-title">
        <p>Find Restaurants based on criteria:</p>
        <table className="table table-hover">
          <tbody>
            {props.criteria.map((cri, index) => (
              <tr className="table-active" key={index}>
                <td width="40%">{cri.criteriaName}</td>
                <td width="50%">{cri.data.name}</td>
                <td width="10%">
                  {cri.criteriaName !== "City" && (
                    <i
                      className="fas fa-times"
                      aria-hidden="true"
                      style={{ color: "red" }}
                      onClick={() => props.removeCriteriaHandler(index)}
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pull-right">
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
);

export default SearchCriteria;
