import React from "react";
import LeedsTable from "./data/LeedsTable";
import ListTable from "./data/ListTable";
import CompaniesTable from "./data/CompaniesTables";
import "./Result.css";
import ResultsRowButton from "./ResultsRowButton";
function ResultTable() {
  return (
    <>
      <div className="container" style={{ paddingTop: "2rem" ,paddingLeft:"3rem"}}>
        <h3>Results</h3>
        <div className="bordered-tab-contents" style={{ paddingTop: "1rem" }}>
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                data-toggle="tab"
                href="#leeds"
                role="tab"
                style={{
                  color: "black",
                  fontWeight: "bold",
                
                }}
              >
                Leeds
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#list"
                role="tab"
                style={{ color: "black", fontWeight: "bold" }}
              >
                Lists
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#companies"
                role="tab"
                style={{ color: "black", fontWeight: "bold" }}
              >
                Companies
              </a>
            </li>
          </ul>
          <div className="tab-content border border-top-0">
            <ResultsRowButton/>
            <div className="tab-pane active" id="leeds" role="tabpanel">
              <div className="container" style={{marginTop:"-2rem"}}>
                <LeedsTable />
              </div>
            </div>

            <div className="tab-pane" id="list" role="tabpanel">
              <div className="container" style={{marginTop:"-2rem"}}>
                <ListTable />
              </div>
            </div>

            <div className="tab-pane" id="companies" role="tabpanel">
              <div className="container" style={{marginTop:"-2rem"}}>
                <CompaniesTable />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResultTable;
