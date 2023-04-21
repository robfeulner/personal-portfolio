import styled from "styled-components";
import { useState, useEffect } from "react";
import PersonalPortfolio from "./PersonalPortfolio";
import Suoni from "./Suoni";

const WebPortfolio = () => {
  const [site, setSite] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setVisible(true);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  const handlePortfolio = (event) => {
    setSite("portfolio");
  };

  const handleSuoni = (event) => {
    setSite("suoni");
  };

  const handleSportsSavvy = (event) => {
    setSite("sportssavvy");
  };

  const handleSlingAir = (event) => {
    setSite("slingair");
  };

  return (
    <>
      <Wrapper className={visible ? "fade-in" : ""}>
        <LeftColumn>
          <H1>Web Portfolio</H1>
          <h2 onClick={handlePortfolio}>Personal Portfolio</h2>
          <h2 onClick={handleSuoni}>Suoni Per Il Popolo Archive</h2>
          <h2 onClick={handleSportsSavvy}>Faux e-Commerce Website</h2>
          <h2 onClick={handleSlingAir}>SlingAir (reservation website)</h2>
        </LeftColumn>
        <RightColumn>
          {site === "portfolio" && <PersonalPortfolio />}
          {site === "suoni" && <Suoni />}
        </RightColumn>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  &.fade-in {
    opacity: 1;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 30%;
`;

const H1 = styled.h1`
  font-size: 3em;
`;

const RightColumn = styled.div``;

export default WebPortfolio;
