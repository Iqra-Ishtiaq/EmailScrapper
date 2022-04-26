import React from "react";
import "./Result.css";
// import "../../src/App.css";

function ResultsRowButton() {
  return (
    <>
      {/* <!-- Actual search box --> */}
      <div className="row">
        <div
          className="container"
          style={{ paddingTop: "2rem", paddingLeft: "2rem" }}
        >
          <div className="form-group has-search">
            <span className="fa fa-search form-control-feedback"></span>

            <input
              type="text"
              className="form-control"
              placeholder="Search"
              style={{ width: "16rem" }}
            />
          </div>
        </div>
        <div
          className="container"
          style={{ marginTop: "-3rem", marginRight: "2rem" }}
        >
          <div className="row">
            <div className="col-md">
              <div className="d-flex justify-content-end">
                <button
                  type="button"
                  className=" btn-outline"
                  style={{
                    marginRight: "1rem",
                    color: "black",
                    backgroundColor: "white",
                    borderColor: "black",
                    width: "5rem",
                    height: "3rem",
                  }}
                >
                  Export
                </button>
                <button
                  type="button"
                  className="btn-outline"
                  style={{
                    marginRight: "1rem",
                    color: "black",
                    backgroundColor: "white",
                    borderColor: "black",
                    width: "5rem",
                    height: "3rem",
                  }}
                >
                  Print
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResultsRowButton;
