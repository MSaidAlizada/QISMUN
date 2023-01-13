import React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Navigator from "./components/Navigator/Navigator";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  return (
    <div className="App">
      <div style={{ marginLeft: "280px" }}>
        <BrowserRouter>
          <Navigator/>
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="/about" element={<AboutUs/>} />
          </Routes>
        </BrowserRouter>
      </div> 
    </div>
  );
}

export default App;
