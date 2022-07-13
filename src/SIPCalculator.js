import React, { useState } from "react";
import "./App.css";
// import MutualFund from "./MutualFund";
import { Chart, Tooltip, Title, ArcElement, Legend} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
Chart.register(
  Tooltip, Title, ArcElement, Legend
);


function SIPCal() {
  let [value1, onChange1] = useState(1);
  const [value2, onChange2] = useState(1);
  const [value3, onChange3] = useState(1);

 
  var monthlyRate = value2 / 12 / 100;  
  var months = value3 * 12;  
  var investment = value1*months;
  var futureValue = 0; 

  futureValue=(value1 * (1+monthlyRate) * ((Math.pow((1+monthlyRate),months)) - 1)/monthlyRate)
  futureValue= Math.round(futureValue);
  var returns = futureValue-investment;

  const data = {
    labels: [
      'Amount',
      'Interest',
      'Total Years'
  ],
    datasets: [{
        data: [value1,value2,value3],
        backgroundColor: ['#17BFB5','#37578a','#b4294e'],
    }
  ],
    
  };
  const datashow = {
    labels: [
      'Investment',
      'Return',
      'Future Value'
  ],
    datasets: [{
        data: [investment, returns, futureValue ],
        backgroundColor: ['#17BFB5','#37578a','#b4294e'],
    }
  ],
    
  };

  function test(index) {
  document.querySelector('#dou1').classList.add("hide");
  document.querySelector('#dou2').classList.add("show");
  document.querySelector('#dou1').classList.remove("show");
  }

  
 
  return (
    <>
      <div className="container col-12">
        <div className="row">
          <div className="menu col-xs-12 col-md-3">
            <ul>
              <li><a href="/">EMI Calculator</a></li>
              <li><a href="mutual">Mutual Fund Calculator</a></li>
              <li><a href="PPFCalculator">PPF Calculator</a></li>
              <li><a href="FDCalculator">FD Calculator</a></li>
              <li><a href="RDCalculator">RD Calculator</a></li>
              <li><a href="Lumpsum">Lump Sum Calculator</a></li>
              <li><a href="SIPCalculator">SIP Calculator</a></li>
            </ul>
          </div>
          <div className="calculation col-xs-12 col-md-9">
            <div className="row head">
            <h1 className="heading">SIP Calculator</h1>
            <div className="calculate col-md-6">
              <form action="/" method="post">
                <div className="inputfield">
                  <label htmlFor="invest1">Total Investment</label>
                  <input className="right" type="text" value={value1 ? value1 : 1} id="monthly_investment" onChange={({ target: { value: radius } }) => {
                onChange1(radius); test();
              }}></input>
                </div>
                <input type="range" className="range" step="500" min="1" id="invest1" value={value1 ? value1 : 1} max="200000" onChange={({ target: { value: radius } }) => {
                onChange1(radius); test();
              }}></input>
              <br />
              <br />
              <div className="inputfield">
                  <label htmlFor="invest2">Return Rate (in %)</label>
                  <input className="right" type="text" value={value2 ? value2 : 0} id="return_rate" onChange={({ target: { value: radius } }) => {
                onChange2(radius); test();
              }}></input>
                </div>
                <input type="range" min="1" id="invest2" value={value2 ? value2 : 0} max="30" className="range" onChange={({ target: { value: radius } }) => {
                onChange2(radius); test();
              }}></input>
               <br />
               <br />
               <div className="inputfield">
                  <label htmlFor="invest3">Time Period (in Months)</label>
                  <input className="right" type="text" value={value3 ? value3 : 0} id="time_period" onChange={({ target: { value: radius } }) => {
                onChange3(radius); test();
              }}></input>
                </div>
                <input type="range" min="1" id="invest3" value={value3 ? value3 : 0} max="30" className="range" onChange={({ target: { value: radius } }) => {
                onChange3(radius); test();
              }}></input>
               <br />
               <br />
               <span id="totalInvestment"> Total Investment:₹ {investment}</span>
               <br />
               <br />
               <span> Total Return:₹ {returns}</span>
               <br />
               <br />
               <span> Future value:₹ {futureValue}</span>
               <br />
               <br />
              </form>
            </div>
            <div className="chart mutu col-md-6 col-sm-6 show" id="dou1">
              <Doughnut data={data}></Doughnut>
            </div>
            <div className="chart mutu col-md-6 hide" id="dou2">
              <Doughnut data={datashow}></Doughnut>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SIPCal;
