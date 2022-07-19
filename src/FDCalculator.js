import React, { useState } from "react";
import "./App.css";
import { Chart, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
Chart.register(Tooltip, Title, ArcElement, Legend);

function FDCal() {
  const [value1, onChange1] = useState(100000);
  const [value2, onChange2] = useState(6.5);
  const [value3, onChange3] = useState(5);

  let Future = +value1 + (value1 * value2 * value3) / 100;
  // let Future = value1 * Math.pow(value2 /100+1, value3);
  Future = Math.round(Future);
  const returns = Future-value1;

  // const data = {
  //   labels: ["Amount", "Interest", "Total Years"],
  //   datasets: [
  //     {
  //       data: [value1, value2, value3],
  //       backgroundColor: ["#17BFB5", "#37578a", "#b4294e"],
  //     },
  //   ],
  // };

  const datashow = {
    labels: ["Investment", "Return", "Total Value"],
    datasets: [
      {
        data: [value1, returns, Future],
        backgroundColor: ["#17BFB5", "#37578a", "#b4294e"],
      },
    ],
  };
  // function test() {
  //   document.querySelector("#dou1").classList.add("hide");
  //   document.querySelector("#dou2").classList.add("show");
  //   document.querySelector("#dou1").classList.remove("show");
  // }

  function functionOne(e) {
    let value = +e.target.value;
    if (value === 2) {
      window.location.href = "/SIPCalculator";
    } else if (value === 3) {
      window.location.href = "/Lumpsum";
    } else if (value === 4) {
      window.location.href = "/mutual";
    } else if (value === 5) {
      window.location.href = "/PPFCalculator";
    } else if (value === 6) {
      window.location.href = "/SWPCalculator";
    } else if (value === 7) {
      window.location.href = "/FDCalculator";
    } else if (value === 8) {
      window.location.href = "/RDCalculator";
    } else if (value === 9) {
      window.location.href = "/HRACalculator";
    } else if (value === 10) {
      window.location.href = "/EMICalculator";
    } else if (value === 11) {
      window.location.href = "/NPSCalculator";
    } else {
      window.location.href = "/SIPCalculator";
    }
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="menu marg">
            <a href="/SIPCalculator">SIP Calculator</a>
            <a href="/Lumpsum">Lump Sum Calculator</a>
            <a href="/mutual">Mutual Fund Calculator</a>
            <a href="/PPFCalculator">PPF Calculator</a>
            <a href="/SWPCalculator">SWP Calculator</a>
            <a href="/FDCalculator">FD Calculator</a>
            <a href="/RDCalculator">RD Calculator</a>
            <a href="/FDCalculator">HRA Calculator</a>
            <a href="/EMICalculator">EMI Calculator</a>
            <a href="/RDCalculator">NPS Calculator</a>
          </div>
          <div className="drop">
            <select
              className="droplist"
              onChange={(e) => {
                functionOne(e);
              }}
            >
              <option value="1">Calculator</option>
              <option value="2">SIP Calculator</option>
              <option value="3">Lump Sum Calculator</option>
              <option value="4">Mutual Fund Calculator</option>
              <option value="5">PPF Calculator</option>
              <option value="6">SWP Calculator</option>
              <option value="7">FD Calculator</option>
              <option value="8">RD Calculator</option>
              <option value="9">HRA Calculator</option>
              <option value="10">EMI Calculator</option>
              <option value="11">NPS Calculator</option>
            </select>
          </div>
          <div className="calculation">
            <div className="calculator">
              <h1 className="heading">FD Calculator</h1>
              <div className="inner_container">
                <div className="half">
                  <form action="/" method="post">
                    <div className="inputfield">
                      <label htmlFor="invest1">Total Investment</label>
                      <input
                        className="right"
                        type="text"
                        value={value1 ? value1 : 1}
                        id="monthly_investment"
                        onChange={({ target: { value: radius } }) => {
                          onChange1(radius);
                          test();
                        }}
                      ></input>
                    </div>
                    <input
                      type="range"
                      min="1"
                      step="1000"
                      id="invest1"
                      value={value1 ? value1 : 1}
                      max="200000"
                      className="range"
                      onChange={({ target: { value: radius } }) => {
                        onChange1(radius);
                        test();
                      }}
                    ></input>
                    <br />
                    <br />
                    <div className="inputfield">
                      <label htmlFor="invest2">Rate of Interest (P.A in %)</label>
                      <input
                        className="right"
                        type="text"
                        value={value2 ? value2 : 0}
                        id="return_rate"
                        onChange={({ target: { value: radius } }) => {
                          onChange2(radius);
                          test();
                        }}
                      ></input>
                    </div>
                    <input
                      type="range"
                      min="1"
                      id="invest2"
                      value={value2 ? value2 : 0}
                      max="30"
                      className="range"
                      onChange={({ target: { value: radius } }) => {
                        onChange2(radius);
                        test();
                      }}
                    ></input>
                    <br />
                    <br />
                    <div className="inputfield">
                      <label htmlFor="invest3">Time Period (in Years)</label>
                      <input
                        className="right"
                        type="text"
                        value={value3 ? value3 : 0}
                        id="time_period"
                        onChange={({ target: { value: radius } }) => {
                          onChange3(radius);
                          test();
                        }}
                      ></input>
                    </div>
                    <input
                      type="range"
                      min="1"
                      id="invest3"
                      value={value3 ? value3 : 0}
                      max="30"
                      className="range"
                      onChange={({ target: { value: radius } }) => {
                        onChange3(radius);
                        test();
                      }}
                    ></input>
                    <br />
                    <br />
                    <span className="totalInvestment">
                      Invested Amount:<strong>₹ {value1}</strong>
                    </span>
                    <br />
                    <br />
                    <span className="totalInvestment"> Estimated Returns:<strong>₹ {returns}</strong></span>
                    <br />
                    <br />
                    <span className="totalInvestment"> Total value:<strong>₹ {Future}</strong></span>
                    <br />
                    <br />
                  </form>
                </div>
                <div className="half">
                  {/* <div className="chart mutu col-md-6 show col-sm-6" id="dou1">
                    <Doughnut data={data}></Doughnut>
                  </div> */}
                  <div className="chart mutu" id="dou2">
                    <Doughnut data={datashow}></Doughnut>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FDCal;
