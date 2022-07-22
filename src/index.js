import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './main.css';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import {createRoot} from 'react-dom/client';
// import * as serviceWorker from "./serviceWorker";
import React from 'react';
// import ReactDOM from "react-dom";
import './index.css';
// import App from './App';
import EMICalculator from './EMICalculator';
import MutualFund from './MutualFund';
import PPFCal from './PPFCalculator';
import SWPCal from './SWPCalculator';
import FDCal from './FDCalculator';
import RDCal from './RDCalculator';
import Lumpsum from './LumpsumCalculator';
import SIPCal from './SIPCalculator';
import NPSCal from './NPSCalculator';
import HRACal from './HRACalculator';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    {/* <Navigation /> */}
    <Routes>
       <Route path="/" element={<SIPCal />} />
      {/* <Route path="/" element={<App />} /> */}
      <Route path="/EMICalculator" element={<EMICalculator />} />
      <Route path="/mutual" element={<MutualFund />} />
      <Route path="/PPFcalculator" element={<PPFCal />} />
      <Route path="/SWPcalculator" element={<SWPCal />} />
      <Route path="/FDCalculator" element={<FDCal />} />
      <Route path="/RDCalculator" element={<RDCal />} />
      <Route path="/Lumpsum" element={<Lumpsum />} />
      <Route path="/NPSCalculator" element={<NPSCal />} />
      <Route path="/HRACalculator" element={<HRACal />} />
      {/* </Route> */}
    </Routes>

  </Router>,

  // document.getElementById("root")
);