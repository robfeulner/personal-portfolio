import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import Home from "./components/Home";
import ArtPortfolio from "./components/ArtPortfolio";

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
        </Routes>
      </div>
      {/* <Footer />
    </Wrapper> */}
    </BrowserRouter>
  );
};

export default App;
