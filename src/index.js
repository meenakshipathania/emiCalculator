import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './main.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import * as serviceWorker from "./serviceWorker";
import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import App from './App';
import MutualFund from './MutualFund';
import PPFCal from './PPFCalculator';
import FDCal from './FDCalculator';
import RDCal from './RDCalculator';
import Lumpsum from './LumpsumCalculator';
import SIPCal from './SIPCalculator';


ReactDOM.render(
  <Router>
    {/* <Navigation /> */}
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/mutual" element={<MutualFund />} />
      <Route path="/PPFcalculator" element={<PPFCal />} />
      <Route path="/FDCalculator" element={<FDCal />} />
      <Route path="/RDCalculator" element={<RDCal />} />
      <Route path="/Lumpsum" element={<Lumpsum />} />
      <Route path="/SIPCalculator" element={<SIPCal />} />
      {/* </Route> */}
    </Routes>

  </Router>,

  document.getElementById("root")
);