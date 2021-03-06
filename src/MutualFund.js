import React, { useState } from "react";
import "./App.css";
import { ShareSocial } from "react-share-social";
import "font-awesome/css/font-awesome.min.css";
import { Chart, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
Chart.register(Tooltip, Title, ArcElement, Legend);

function MutualFund() {
  const [showResults, setShowResults] = React.useState(false);
  const [buttonText, setButtonText] = useState("Share");
  const [value1, onChange1] = useState(10000);
  const [value2, onChange2] = useState(12);
  const [value3, onChange3] = useState(5);

  const futurevalue = value1 * Math.pow(1 + value2 / 100, value3);
  const future_value = Math.round(futurevalue);
  const estimated_return = future_value - value1;

  // const data = {
  //   labels: [
  //     'Amount',
  //     'Interest',
  //     'Total Years'
  // ],
  //   datasets: [{
  //       data: [value1, value2, value3],
  //       backgroundColor: ['#17BFB5','#37578a','#b4294e'],
  //   }
  // ],

  // };

  const datashow = {
    labels: ["Investment", "Return", "Total Value"],
    datasets: [
      {
        data: [value1, estimated_return, future_value],
        backgroundColor: ["#3498eb", "#37578a", "#f2556f"],
      },
    ],
  };

  const style = {
    borderRadius: 3,
    border: 0,
    color: "white",
    padding: "0 30px",
  };
  const Results = () => (
    <div id="results" className="search-results">
      <div className="socialshare">
        <ShareSocial
          style={style}
          url="http://www.psd2htmlx.com/react/allcalculator/index.html#/mutual"
          socialTypes={["facebook", "twitter", "linkedin"]}
        />
      </div>
    </div>
  );
  function handleClick() {
    if (buttonText === "Hide") {
      setButtonText("Share");
    } else {
      setButtonText("Hide");
    }
  }

  function functionOne(e) {
    let value = +e.target.value;
    if (value === 2) {
      window.location.href = "/";
    } else if (value === 3) {
      window.location.href = "#/Lumpsum";
    } else if (value === 4) {
      window.location.href = "#/mutual";
    } else if (value === 5) {
      window.location.href = "#/PPFCalculator";
    } else if (value === 6) {
      window.location.href = "#/SWPCalculator";
    } else if (value === 7) {
      window.location.href = "#/FDCalculator";
    } else if (value === 8) {
      window.location.href = "#/RDCalculator";
    } else if (value === 9) {
      window.location.href = "#/HRACalculator";
    } else if (value === 10) {
      window.location.href = "#/EMICalculator";
    } else if (value === 11) {
      window.location.href = "#/NPSCalculator";
    } else {
      window.location.href = "#/SIPCalculator";
    }
  }

  return (
    <>
      <div className="container mar">
        <div className="row">
          <div className="menu marg">
            <a href="/">SIP Calculator</a>
            <a href="#/Lumpsum">Lump Sum Calculator</a>
            <a href="#/mutual">Mutual Fund Calculator</a>
            <a href="#/PPFCalculator">PPF Calculator</a>
            <a href="#/SWPCalculator">SWP Calculator</a>
            <a href="#/FDCalculator">FD Calculator</a>
            <a href="#/RDCalculator">RD Calculator</a>
            <a href="#/HRACalculator">HRA Calculator</a>
            <a href="#/EMICalculator">EMI Calculator</a>
            <a href="#/NPSCalculator">NPS Calculator</a>
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
              <h2 className="heading">Mutual Fund Calculator</h2>
              <div className="inner_container">
                <div className="half">
                  <div className="inputfield">
                    <p>Total Investment</p>
                    <div className="secondLabel">
                      <p className="labelPara">???</p>
                      <input
                        className="right paddi"
                        type="text"
                        value={value1 ? value1 : 1}
                        id="monthly_investment"
                        onChange={({ target: { value: radius } }) => {
                          onChange1(radius);
                        }}
                      ></input>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="500"
                    step="500"
                    id="invest1"
                    value={value1 ? value1 : 1}
                    max="2000000"
                    className="range"
                    onChange={({ target: { value: radius } }) => {
                      onChange1(radius);
                    }}
                  ></input>
                  <br />
                  <br />
                  <div className="inputfield">
                    <p>Expected Return Rate</p>
                    <div className="secondLabel">
                      <input
                        className="right"
                        type="text"
                        value={value2 ? value2 : 0}
                        id="invest2"
                        onChange={({ target: { value: radius } }) => {
                          onChange2(radius);
                        }}
                      ></input>
                      <p className="labelPara">%</p>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="1"
                    step="0.5"
                    id="invest2"
                    value={value2 ? value2 : 0}
                    max="30"
                    className="range"
                    onChange={({ target: { value: radius } }) => {
                      onChange2(radius);
                    }}
                  ></input>
                  <br />
                  <br />
                  <div className="inputfield">
                    <p>Time Period</p>
                    <div className="secondLabel">
                      {" "}
                      <input
                        className="right"
                        type="text"
                        value={value3 ? value3 : 0}
                        id="time_period"
                        onChange={({ target: { value: radius } }) => {
                          onChange3(radius);
                        }}
                      ></input>
                      <p className="labelPara">Yr</p>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="1"
                    id="invest3"
                    value={value3 ? value3 : 0}
                    max="30"
                    step="0.5"
                    className="range"
                    onChange={({ target: { value: radius } }) => {
                      onChange3(radius);
                    }}
                  ></input>
                  <br />
                  <br />
                  <br />
                  <div className="lower">
                    <div className="totalInvestment">Invested Amount</div>
                    <div className="totalInvestment">
                      <strong>???{value1}</strong>
                    </div>
                  </div>
                  <br />
                  <div className="lower">
                    <div className="totalInvestment">Estimated Returns</div>
                    <div className="totalInvestment">
                      <strong>???{estimated_return}</strong>
                    </div>
                  </div>
                  <br />
                  <div className="lower">
                    <div className="totalInvestment">Total value</div>
                    <div className="totalInvestment">
                      <strong>???{future_value}</strong>
                    </div>
                  </div>
                  <br />
                </div>
                <div className="half">
                  {/* <div className="chart mutu show" id="dou1">
              <Doughnut data={data}></Doughnut>
            </div> */}
                  <div className="chart mutu" id="dou2">
                    <Doughnut data={datashow}></Doughnut>
                  </div>
                  <div className="bottom">
                    <button
                      type="button"
                      onClick={() => {
                        setShowResults((currentShow) => !currentShow);
                        handleClick();
                      }}
                      className="butt"
                    >
                      {buttonText}
                    </button>
                    {showResults ? <Results /> : null}
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

export default MutualFund;
