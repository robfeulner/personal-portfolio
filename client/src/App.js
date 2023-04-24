import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import GlobalStyles from "./components/global/GlobalStyles";
import Header from "./components/header and footer/Header";
import Home from "./components/home/Home";
import ArtPortfolio from "./components/art portfolio/ArtPortfolio";
import WebPortfolio from "./components/web portfolio/WebPortfolio";
import Bio from "./components/bio/Bio";
import CableBox from "./components/art portfolio/CableBox";
import PivotForwardCollapse from "./components/art portfolio/PivotForwardCollapse";
import Carmen from "./components/art portfolio/Carmen";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      {/* <Wrapper> */}
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/art-portfolio" element={<ArtPortfolio />} />
          <Route path="/art-portfolio/cable-box" element={<CableBox />} />
          <Route
            path="/art-portfolio/pivot-forward-collapse"
            element={<PivotForwardCollapse />}
          />
          <Route path="/art-portfolio/carmen" element={<Carmen />} />
          <Route path="/web-portfolio" element={<WebPortfolio />} />
          <Route path="/bio" element={<Bio />} />
        </Routes>
      </div>
      {/* <Footer />
    </Wrapper> */}
    </BrowserRouter>
  );
};

export default App;
