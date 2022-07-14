import React, { useState } from "react";
import "./App.css";
// import MutualFund from "./MutualFund";
import { Chart, Tooltip, Title, ArcElement, Legend} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
Chart.register(
  Tooltip, Title, ArcElement, Legend
);

function EMICalculator() {
  const [value1, onChange1] = useState(1000000);
  const [value2, onChange2] = useState(12);
  const [value3, onChange3] = useState(5);
  
  let r = value2/100;
  r =r/12;
  const emi = (value1 * r * Math.pow(1+r,value3*12))/(Math.pow(1+r,value3*12)-1);
  const total= Math.round(emi);
  let interest = emi*value3*12-value1;
  interest=Math.round(interest);

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
    labels: [
      'Investment',
      'Monthly EMI',
      'Total Interest'
  ],
    datasets: [{
        data: [value1, total, interest],
        backgroundColor: ['#b4294e','#37578a', '#17BFB5'],
    }
  ],
    
  };

  function test() {
  document.querySelector('#dou1').classList.add("hide");
  document.querySelector('#dou2').classList.add("show");
  document.querySelector('#dou1').classList.remove("show");
  }
  return (
    <>
      <div className="container">
        <div className="row">
        <div className="menu marg">
            <a href="/SIPCalculator" onclick="setCity(event)">SIP Calculator</a>
            <a href="/Lumpsum" onclick="setCity(event)">Lump Sum Calculator</a>
            <a href="/mutual" onclick="setCity(event)">Mutual Fund Calculator</a>
            <a href="/PPFCalculator" onclick="setCity(event)">PPF Calculator</a>
            <a href="/SWPCalculator" onclick="setCity(event)">SWP Calculator</a>
            <a href="/FDCalculator" onclick="setCity(event)">FD Calculator</a>
            <a href="/RDCalculator" onclick="setCity(event)">RD Calculator</a>
            <a href="/FDCalculator" onclick="setCity(event)">HRA Calculator</a> 
            <a href="/EMICalculator" onclick="setCity(event)">EMI Calculator</a>
            <a href="/RDCalculator" onclick="setCity(event)">NPS Calculator</a>
          </div>
          <div className="calculation">
            <div className="calculator">
            <h2 className="heading">EMI Calculator</h2>
            <div className="inner_container">
              <div className="half">
              <form action="/" method="post">
                <div className="inputfield">
                  <label htmlFor="invest1">Loan Amount</label>
                  <input className="right" type="text" value={value1 ? value1 : 1} placeholder="1000" id="monthly_investment" onChange={({ target: { value: radius } }) => {
                onChange1(radius); test();
              }}></input>
                </div>
                <input type="range" min="1" id="invest1" value={value1 ? value1 : 1} max="200000" className="range" onChange={({ target: { value: radius } }) => {
                onChange1(radius); test();
              }}></input>
              <br />
              <br />
              <div className="inputfield">
                  <label htmlFor="invest2">Rate of Interest (in %)</label>
                  <input className="right" type="text" value={value2 ? value2 : 0} id="return_rate" onChange={({ target: { value: radius } }) => {
                onChange2(radius); test();
              }} ></input>
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
               <span id="totalInvestment"> Amount:<strong>₹ {value1}</strong></span>
               <br />
               <br />
               <span id="future"> EMI:<strong>₹ {total}</strong></span>
               <br />
               <br />
               <span id="interest"> Total Interest:<strong>₹ {interest}</strong></span>
               <br />
               <br />
              </form>
              </div>
              <div className="half">
              {/* <div className="chart pi show" id="dou1">
              <Doughnut data={data}></Doughnut>
            </div> */}
            <div className="chart pi" id="dou2">
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

export default EMICalculator;
