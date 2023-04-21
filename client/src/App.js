import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import Home from "./components/Home";
import ArtPortfolio from "./components/ArtPortfolio";
import WebPortfolio from "./components/WebPortfolio";

const App = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setVisible(true);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyles />
      {/* <Wrapper> */}
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home visible={visible} />} />
          <Route
            path="/art-portfolio"
            element={<ArtPortfolio visible={visible} />}
          />
          <Route
            path="/web-portfolio"
            element={<WebPortfolio visible={visible} />}
          />
        </Routes>
      </div>
      {/* <Footer />
    </Wrapper> */}
    </BrowserRouter>
  );
};

export default App;
