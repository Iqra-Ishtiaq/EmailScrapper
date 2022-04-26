import React, { useEffect } from "react";
import { BsCheckLg } from "react-icons/bs";

import { Table } from "react-bootstrap";
import data from "./data";
import "./repricing.css";
import { BsArrow90DegDown } from "react-icons/bs";
import Alert from "react-bootstrap/Alert";
import monthly from "./monthlydata";

function Repricing() {
  const [RepricingData, setRepricing] = React.useState(data);
  const [toggle, setToggle] = React.useState(false);

  const tableHeader = [
    {
      firstcol: "$0",
      secondcol: "$49",
      thirdcol: "$89",
    },
  ];
  useEffect(() => {
    setRepricing(data);
  }, []);
  const yearlyPricing = () => {
    setRepricing(data);
    setToggle(false);
  };
  const monthlyPricing = () => {
    setRepricing(monthly);
    setToggle(true);
  };

  return (
    <>
      <div className="container-fluid" style={{ paddingTop: "3rem" }}>
        <h1 className="text-center">Pricing to suit all of Businesses</h1>
        <p className="text-center">No Hidden Fees-Cancel at anytime</p>

        <div className="row">
          <div className="col text-center">
            <p
              className="salebtn"
              style={{
                width: "7rem",
                marginBottom: "-1rem",
              }}
            >
              Save 20%
            </p>
            <BsArrow90DegDown className="arrowbtn" />

            <div
              style={{
                borderStyle: "solid",
                borderRadius: "2rem",
                borderColor: "black",
                width: "16rem",
                marginLeft: "40%",
                marginRight: "40%",
              }}
            >
              <a
                className={!toggle ? "btn-active" : "btn-monthly"}
                onClick={yearlyPricing}
                style={{}}
              >
                Yearly
              </a>
              <a
                className={toggle ? "btn-active" : "btn-monthly"}
                onClick={monthlyPricing}
                style={{
                  textDecoration: "none",
                }}
              >
                Monthly
              </a>
            </div>
          </div>
          {/* End of button */}
        </div>
        {/* End of row */}
      </div>
      {/* End of container */}

      {/* Start of table */}

      <div className="container" style={{ paddingTop: "2rem" }}>
        <Table className="table ">
          <tbody>
            <tr>
              {/* Columns */}
              <th></th>
              <th style={{ paddingTop: "6rem" }} className="text-center">
                {tableHeader[0].firstcol}
                <p>per month</p>
              </th>
              <th
                style={{ backgroundColor: "black", color: "white" }}
                className="text-center"
              >
                <button className="btncol2">Most Popular</button>
                <br /> <br />
                {tableHeader[0].secondcol}
                <p>per month</p>
              </th>
              <th className="text-center" style={{ paddingTop: "6rem" }}>
                {tableHeader[0].thirdcol}
                <p>per month</p>
              </th>
            </tr>

            {/* Rows */}
            {RepricingData.map((item, i) => (
              <tr key={i}>
                <td>{item.feature}</td>
                <td className="text-center">
                  {item.firstcol === "true" ? <BsCheckLg /> : item.firstcol}
                </td>
                <td
                  style={{ backgroundColor: "black", color: "white" }}
                  className="text-center"
                >
                  {item.secondcol === "true" ? <BsCheckLg /> : item.secondcol}
                </td>
                <td className="text-center">
                  {item.thirdcol === "true" ? <BsCheckLg /> : item.thirdcol}
                </td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td>
                <button className="footerleft">Choose Plan</button>
              </td>
              <td
                align="center"
                style={{ background: "black", color: "white" }}
              >
                <button className="footercenter">Choose Plan</button>
              </td>
              <td>
                <button className="footerright">Choose Plan</button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Repricing;
