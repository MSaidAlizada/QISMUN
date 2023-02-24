import React from "react";
import {isMobile} from "react-device-detect";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Navigator from "./components/Navigator/Navigator";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Conference from "./components/Conference/Conference";
import Press from "./components/Press/Press";
import Footer from "./components/Footer/Footer";

function App() {
  var marg = "270px"
  if (isMobile) {
    marg = "0px"
  }
  return (
    <div className="App">
      <div style={{ marginLeft: marg }}>
        <BrowserRouter>
          <Navigator />
          <div style={{display: "flex", flexDirection: "column", minHeight: "100vh"}}>
            <Routes>
              <Route path="/Qismun/" element={<Home />}></Route>
              <Route path="/" element={<Home />}></Route>
              <Route path="/Qismun/about" element={<div><AboutUs /> {isMobile ? (<Footer/>) : (<></>)}</div>} />
              <Route path="/Qismun/conference" element={<div><Conference /> {isMobile ? (<Footer/>) : (<></>)}</div>} />
              <Route path="/Qismun/press" element={<div><Press /> {isMobile ? (<Footer/>) : (<></>)}</div>} />
            </Routes>
          </div>

        </BrowserRouter>
      </div> 
    </div>
  );
}

export default App;
