import React, { useState } from "react";
import "./App.css";
import { Chart, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
Chart.register(Tooltip, Title, ArcElement, Legend);

function FDCal() {
  const [value1, onChange1] = useState(1);
  const [value2, onChange2] = useState(1);
  const [value3, onChange3] = useState(1);

  var Investment = value1 * value3;
  var rate = Investment * (value2 / 100);
  var Future = +value1 + value1 * value2 * (value3 / 100);
  Future = Math.round(Future);

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
    labels: ["Investment", "Return", "Future Value"],
    datasets: [
      {
        data: [value1, rate, Future],
        backgroundColor: ["#17BFB5", "#37578a", "#b4294e"],
      },
    ],
  };
  function test() {
    document.querySelector("#dou1").classList.add("hide");
    document.querySelector("#dou2").classList.add("show");
    document.querySelector("#dou1").classList.remove("show");
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
                      <label htmlFor="invest2">Return Rate (in %)</label>
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
                      <label htmlFor="invest3">Time Period (in Monthes)</label>
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
                    <span id="totalInvestment">
                      {" "}
                      Total Investment:₹ {value1}
                    </span>
                    <br />
                    <br />
                    <span> Total Return:₹ {rate}</span>
                    <br />
                    <br />
                    <span> Future value:₹ {Future}</span>
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
