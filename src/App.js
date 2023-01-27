import React from "react";
import {isMobile} from "react-device-detect";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Navigator from "./components/Navigator/Navigator";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Press from "./components/Press/Press";
import Footer from "./components/Footer/Footer";

function App() {
  var marg = "280px"
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
              <Route path="/Qismun/about" element={<AboutUs />} />
              <Route path="/Qismun/press" element={<Press/>} />
            </Routes>
          </div>
          {isMobile ? (<Footer/>) : (<></>)}
        </BrowserRouter>
      </div> 
    </div>
  );
}

export default App;
