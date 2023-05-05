import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import GlobalStyles from "./components/global/GlobalStyles";
import Header from "./components/header and footer/Header";
import HeaderMobile from "./components/header and footer/HeaderMobile";
import Home from "./components/home/Home";
import ArtPortfolio from "./components/art portfolio/ArtPortfolio";
import WebPortfolio from "./components/web portfolio/WebPortfolio";
import Bio from "./components/bio/Bio";
import CableBox from "./components/art portfolio/CableBox";
import PivotForwardCollapse from "./components/art portfolio/PivotForwardCollapse";
import Carmen from "./components/art portfolio/Carmen";
import OffTheAir from "./components/art portfolio/OffTheAir";
import VideoArt from "./components/art portfolio/VideoArt";
import BurningDesire from "./components/art portfolio/BurningDesire";
import ManAndHisProgress from "./components/art portfolio/ManAndHisProgress";
import PuertoRicoTautology from "./components/art portfolio/PuertoRicoTautology";

const App = () => {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyles />
      {/* <Wrapper> */}
      <div>
        {/* {isMobile ? <HeaderMobile /> : <Header />} */}
        <HeaderMobile/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/art-portfolio" element={<ArtPortfolio />} />
          <Route path="/art-portfolio/cable-box" element={<CableBox />} />
          <Route
            path="/art-portfolio/pivot-forward-collapse"
            element={<PivotForwardCollapse />}
          />
          <Route path="/art-portfolio/carmen" element={<Carmen />} />
          <Route path="/art-portfolio/off-the-air" element={<OffTheAir />} />
          <Route path="/art-portfolio/video-art" element={<VideoArt />} />
          <Route
            path="/art-portfolio/burning-desire"
            element={<BurningDesire />}
          />
          <Route
            path="/art-portfolio/man-and-his-progress"
            element={<ManAndHisProgress />}
          />
          <Route
            path="/art-portfolio/puerto-rico-tautology"
            element={<PuertoRicoTautology />}
          />
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
