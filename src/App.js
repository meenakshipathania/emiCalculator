import React from "react";
import "./App.css";
// import MutualFund from "./MutualFund";
import { Chart, Tooltip, Title, ArcElement, Legend} from 'chart.js';
// import { Doughnut } from 'react-chartjs-2';
Chart.register(
  Tooltip, Title, ArcElement, Legend
);

function App() {
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
          <div className="menu main">
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
        </div>
      </div>
    </>
  );
}

export default App;
