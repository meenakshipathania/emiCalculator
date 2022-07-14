import React from "react";
import "./App.css";
// import MutualFund from "./MutualFund";
import { Chart, Tooltip, Title, ArcElement, Legend} from 'chart.js';
// import { Doughnut } from 'react-chartjs-2';
Chart.register(
  Tooltip, Title, ArcElement, Legend
);

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="menu">
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
        </div>
      </div>
    </>
  );
}

export default App;
